import React, { useMemo, useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  Canvas,
  Group,
  Path,
  RoundedRect,
  Skia,
} from "@shopify/react-native-skia";
import {
  cancelAnimation,
  clamp,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { buildForestLayout } from "@/utils/radial-layout.engine";
import { RAW_NODES, ROOT_IDS } from "@/utils/data";
import { MiniMap } from "./dynamic-island-map";
import { SPRING_CONFIG } from "@/utils/constants";
import { useAnimationStore } from "@/store/global";
import SkiaGraphNode from "./skia-graph-nodes";
import { hapticWithSequence } from "@/utils/haptics-with-seq";
import { runOnJS } from "react-native-worklets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 2;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BG_COLOR = "#FFF";
const EDGE_COLOR = "#88878055";

// ── Component ─────────────────────────────────────────────────────────────────

export default function SkiaGraph({ newNode }: { newNode?: boolean }) {
  const { nodes, edges } = useMemo(
    () => buildForestLayout(RAW_NODES, ROOT_IDS),
    [],
  );
  const { top } = useSafeAreaInsets();
  // Initial pan: put the root (at 0,0 in layout space) in the screen centre
  const translateX = useSharedValue(SCREEN_WIDTH / 2);
  const translateY = useSharedValue(SCREEN_HEIGHT / 2);
  const lastX = useSharedValue(SCREEN_WIDTH / 2);
  const lastY = useSharedValue(SCREEN_HEIGHT / 2);
  const scale = useSharedValue(1);
  const { showMiniMapProg } = useAnimationStore();

  const startScale = useSharedValue(0);

  // 1. Calculate static bounds once and pass to a shared value
  const rawBounds = useMemo(() => {
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    nodes.forEach((node) => {
      if (node.x < minX) minX = node.x;
      if (node.y < minY) minY = node.y;
      if (node.x + node.width > maxX) maxX = node.x + node.width;
      if (node.y + node.height > maxY) maxY = node.y + node.height;
    });
    // Add a little padding so it doesn't lock directly against the glass
    const PADDING = 50;
    return {
      minX: minX - PADDING,
      minY: minY - PADDING,
      maxX: maxX + PADDING,
      maxY: maxY + PADDING,
    };
  }, [nodes]);

  const bounds = useSharedValue(rawBounds);

  // 2. Track focal point for zooming around the user's fingers
  const originX = useSharedValue(0);
  const originY = useSharedValue(0);

  // Helper worklet to handle clamping regardless of zoom level
  const clampToBounds = (
    val: number,
    scaledMin: number,
    scaledMax: number,
    screenDim: number,
  ) => {
    "worklet";
    const graphSize = scaledMax - scaledMin;
    if (graphSize < screenDim) {
      // Graph is smaller than screen: constrain it inside the screen
      return clamp(val, 0 - scaledMin, screenDim - scaledMax);
    } else {
      // Graph is larger than screen: don't let edges cross screen bounds
      return clamp(val, screenDim - scaledMax, 0 - scaledMin);
    }
  };

  const transform = useDerivedValue(() => [
    { translateX: translateX.value },
    { translateY: translateY.value },
    { scale: scale.value },
  ]);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      // panEnd.set(withSpring(0, SPRING_CONFIG));

      lastX.value = translateX.value;
      lastY.value = translateY.value;
    })
    .onChange((e) => {
      const s = scale.value;
      const b = bounds.value;

      translateX.value = clampToBounds(
        lastX.value + e.translationX,
        b.minX * s,
        b.maxX * s,
        SCREEN_WIDTH,
      );

      translateY.value = clampToBounds(
        lastY.value + e.translationY,
        b.minY * s,
        b.maxY * s,
        SCREEN_HEIGHT,
      );
    })
    .onEnd((e) => {
      const s = scale.value;
      const b = bounds.value;

      const targetX = clampToBounds(
        translateX.value + e.velocityX * 0.12,
        b.minX * s,
        b.maxX * s,
        SCREEN_WIDTH,
      );
      const targetY = clampToBounds(
        translateY.value + e.velocityY * 0.12,
        b.minY * s,
        b.maxY * s,
        SCREEN_HEIGHT,
      );

      translateX.value = withSpring(targetX, SPRING_CONFIG);
      translateY.value = withSpring(targetY, SPRING_CONFIG);
    })
    .onFinalize(() => {
      // panEnd.set(withSpring(1, SPRING_CONFIG));
    });

  const longTapProgress = useSharedValue(0);
  const progress = useSharedValue(0.0);
  const MIN_DURATION = 1000;

  const sequenceIdRef = useRef(0);

  const startHaptics = () => {
    sequenceIdRef.current += 1;
    const myUniqueId = sequenceIdRef.current;

    hapticWithSequence(
      [
        ".",
        50,
        ":",
        50,
        "o",
        "-",
        ".",
        50,
        ":",
        50,
        "o",
        "-",
        ".",
        50,
        ":",
        50,
        "o",
        "-",
      ],
      () => sequenceIdRef.current !== myUniqueId,
    );
  };

  const successHaptics = () => {
    sequenceIdRef.current += 1;
    hapticWithSequence(["O", "O"]);
  };

  const stopHaptics = () => {
    sequenceIdRef.current += 1;
  };

  const isNodePressed = useSharedValue(false);

  const longpressedNode = useSharedValue("");
  const handleSuccessNav = () => {
    router.navigate("/linear");

    setTimeout(() => {
      progress.value = 0;
      longpressedNode.value = "";
    }, 500);
  };
  const longTapGesture = Gesture.LongPress()
    .minDuration(MIN_DURATION)
    .onBegin((e) => {
      // Convert the physical screen touch into Canvas/Graph coordinates
      const graphX = (e.x - translateX.value) / scale.value;
      const graphY = (e.y - translateY.value) / scale.value;

      let hitNode = null;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const hitPadding = 30;

        if (
          graphX >= n.x - hitPadding &&
          graphX <= n.x + n.width + hitPadding &&
          graphY >= n.y - hitPadding &&
          graphY <= n.y + n.height + hitPadding
        ) {
          hitNode = n;
          break;
        }
      }

      //successfully hit a node!
      if (hitNode) {
        isNodePressed.value = true;

        longpressedNode.set(hitNode.id);

        progress.value = withTiming(1, { duration: MIN_DURATION });

        runOnJS(startHaptics)();
      } else {
        isNodePressed.value = false;
      }
    })
    .onStart((e) => {
      if (isNodePressed.value) {
        runOnJS(successHaptics)();
      }
    })
    .onFinalize((e, success) => {
      if (isNodePressed.value) {
        runOnJS(stopHaptics)();
        if (success) {
          runOnJS(handleSuccessNav)();
        } else {
          // If they let go early, cancel the fill and shrink it back down
          cancelAnimation(progress);
          progress.value = withTiming(0, { duration: 200 });
        }
      }
      isNodePressed.value = false;
    });

  const pinchGesture = Gesture.Pinch()
    .onStart((e) => {
      startScale.value = scale.value;
      lastX.value = translateX.value;
      lastY.value = translateY.value;
      // Capture exactly where the user is pinching on the screen
      originX.value = e.focalX;
      originY.value = e.focalY;
    })
    .onUpdate((e) => {
      const nextScale = clamp(startScale.value * e.scale, MIN_ZOOM, MAX_ZOOM);

      //new translations to zoom exactly where the fingers are
      const ratio = nextScale / startScale.value;
      const rawNewX = originX.value - (originX.value - lastX.value) * ratio;
      const rawNewY = originY.value - (originY.value - lastY.value) * ratio;

      // don't zoom out into white space
      const b = bounds.value;

      scale.value = nextScale;
      translateX.value = clampToBounds(
        rawNewX,
        b.minX * nextScale,
        b.maxX * nextScale,
        SCREEN_WIDTH,
      );
      translateY.value = clampToBounds(
        rawNewY,
        b.minY * nextScale,
        b.maxY * nextScale,
        SCREEN_HEIGHT,
      );
    });

  // ── Paint ────────────────────────────────────────────────────────────────────

  const edgePaint = useMemo(() => {
    const p = Skia.Paint();
    p.setColor(Skia.Color(EDGE_COLOR));
    p.setStrokeWidth(1.5);
    p.setStyle(1); // stroke
    p.setAntiAlias(true);
    return p;
  }, []);

  // ── Pre-build edge paths ───────────────────────────────────────────────────

  const edgePaths = useMemo(
    () =>
      edges.map((e) => {
        const path = Skia.Path.Make();
        path.moveTo(e.x1, e.y1);
        path.cubicTo(e.cx1, e.cy1, e.cx2, e.cy2, e.x2, e.y2);
        return { id: e.id, path };
      }),
    [edges],
  );

  const contentBounds = useMemo(() => {
    if (nodes.length === 0) return { minX: 0, minY: 0, width: 0, height: 0 };
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    nodes.forEach((node) => {
      if (node.x < minX) minX = node.x;
      if (node.y < minY) minY = node.y;
      if (node.x + node.width > maxX) maxX = node.x + node.width;
      if (node.y + node.height > maxY) maxY = node.y + node.height;
    });
    return { minX, minY, width: maxX - minX, height: maxY - minY };
  }, [nodes]);
  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <GestureDetector
      gesture={Gesture.Simultaneous(panGesture, pinchGesture, longTapGesture)}
    >
      <Canvas style={styles.canvas}>
        {/* Background */}
        <RoundedRect
          x={0}
          y={0}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          r={0}
          color={BG_COLOR}
        />

        <Group transform={transform}>
          {/* Edges */}
          {edgePaths.map(({ id, path }) => (
            <Path key={id} path={path} paint={edgePaint} />
          ))}

          {/* Nodes */}
          {nodes.map((node, idx) => {
            return (
              <SkiaGraphNode
                newNode={newNode}
                key={idx}
                node={node}
                selectedNode={longpressedNode}
                progress={progress}
              />
            );
          })}
        </Group>
        <MiniMap
          contentBounds={contentBounds}
          showMiniMapProg={showMiniMapProg}
          skiaImages={nodes}
          top={top}
          scale={scale}
          translateX={translateX}
          translateY={translateY}
        />
      </Canvas>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  canvas: { flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
});
