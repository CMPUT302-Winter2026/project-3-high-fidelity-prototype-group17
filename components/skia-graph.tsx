import React, { useCallback, useMemo } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import {
  Canvas,
  Circle,
  Group,
  Paint,
  Path,
  RoundedRect,
  Skia,
  Text,
  matchFont,
  vec,
} from "@shopify/react-native-skia";
import {
  clamp,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { buildForestLayout } from "@/utils/radial-layout.engine";
import { RAW_NODES, ROOT_IDS } from "@/utils/data";
import { LayoutNode } from "@/utils/types";
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 2;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// ── Font ──────────────────────────────────────────────────────────────────────

const font = matchFont({
  fontFamily: Platform.select({ ios: "Helvetica", default: "serif" }),
  fontSize: 20,
  fontWeight: "600",
});

const rootFont = matchFont({
  fontFamily: Platform.select({ ios: "Helvetica", default: "serif" }),
  fontSize: 30,
  fontWeight: "600",
});

const DEPTH_COLORS = [
  "#7F77DD", // depth 0 — root
  "#1D9E75", // depth 1
  "#D85A30", // depth 2
  "#378ADD", // depth 3+
];

const DEPTH_STROKES = ["#534AB7", "#0F6E56", "#993C1D", "#185FA5"];

const BG_COLOR = "#FFF";
const LABEL_COLOR = "#000";
const EDGE_COLOR = "#88878055";
const RADIUS = 34;

function depthColor(depth: number, strokes: string[]) {
  return strokes[Math.min(depth, strokes.length - 1)];
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SkiaGraph() {
  const { nodes, edges } = useMemo(
    () => buildForestLayout(RAW_NODES, ROOT_IDS),
    [],
  );

  // Initial pan: put the root (at 0,0 in layout space) in the screen centre
  const translateX = useSharedValue(SCREEN_WIDTH / 2);
  const translateY = useSharedValue(SCREEN_HEIGHT / 2);
  const lastX = useSharedValue(SCREEN_WIDTH / 2);
  const lastY = useSharedValue(SCREEN_HEIGHT / 2);
  const scale = useSharedValue(1);
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
      // Add velocity decay but clamp the final spring destination so it doesn't bounce out of bounds
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

      translateX.value = withSpring(targetX);
      translateY.value = withSpring(targetY);
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

      // Calculate new translations to zoom exactly where the fingers are
      const ratio = nextScale / startScale.value;
      const rawNewX = originX.value - (originX.value - lastX.value) * ratio;
      const rawNewY = originY.value - (originY.value - lastY.value) * ratio;

      // Ensure we don't zoom out into white space
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

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <GestureDetector gesture={Gesture.Simultaneous(panGesture, pinchGesture)}>
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
          {nodes.map((node) => {
            const fill = depthColor(node.depth, DEPTH_COLORS);
            const stroke = depthColor(node.depth, DEPTH_STROKES);

            // 1. Pick the correct font for this node
            const currentFont = node.isRoot ? rootFont : font;

            // 2. Measure the actual text size (fallback to 0 if font isn't loaded yet)
            const textWidth = currentFont
              ? currentFont.measureText(node.label).width
              : 0;
            const textHeight = currentFont
              ? currentFont.measureText(node.label).height
              : 0;

            // 4. The actual box size should be whichever is bigger: the hardcoded layout size OR the text + padding
            const boxWidth = Math.max(node.width, textWidth);
            const boxHeight = Math.max(node.height, textHeight);

            // 5. Find the center point of the layout engine's intended position
            const centerX = node.isRoot
              ? node.x + node.width / 2 + textHeight
              : node.x + node.width / 2;
            const centerY = node.y + node.height / 2;

            // 6. Shift the new dynamic box so it stays perfectly centered over the edge lines
            const boxX = centerX - boxWidth / 2;
            const boxY = centerY - boxHeight / 2;

            return (
              <Group key={node.id}>
                <RoundedRect
                  x={boxX}
                  y={boxY}
                  width={boxWidth}
                  height={boxHeight}
                  r={RADIUS}
                  color="#fff"
                  // color={fill}
                  style="fill"
                />
                {/* <RoundedRect
                  x={boxX}
                  y={boxY}
                  width={boxWidth}
                  height={boxHeight}
                  r={RADIUS}
                  color={stroke}
                  strokeWidth={1.5}
                  style="stroke"
                /> */}
                {currentFont && (
                  <Text
                    x={centerX - textWidth / 2}
                    y={centerY + textHeight / 2 - 3}
                    text={node.label}
                    font={currentFont}
                    color={LABEL_COLOR}
                  />
                )}
              </Group>
            );
          })}
        </Group>
      </Canvas>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  canvas: { flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
});
