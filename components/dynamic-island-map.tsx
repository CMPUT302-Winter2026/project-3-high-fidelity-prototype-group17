import { Dimensions } from "react-native";
import React, { useEffect, useMemo } from "react";
import {
  Blur,
  Circle,
  ColorMatrix,
  Extrapolate,
  Group,
  Paint,
  Rect,
  RoundedRect,
  Skia,
  vec,
} from "@shopify/react-native-skia";
import {
  DerivedValue,
  interpolate,
  interpolateColor,
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { LayoutNode } from "@/utils/types";
import { usePersistentAppStore } from "@/store/global-persistent";

export const DYNAMIC_ISLAND_HEIGHT = 28;
export const DYNAMIC_ISLAND_WIDTH = 110;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const MINIMAP_WIDTH = 160;
const MINIMAP_HEIGHT = 100;
const MINIMAP_X = SCREEN_WIDTH * 0.5 - MINIMAP_WIDTH / 2;
const RADIUS = 25;

const MAP_PAD = 1;
const DRAW_W = MINIMAP_WIDTH - MAP_PAD * 2;
const DRAW_H = MINIMAP_HEIGHT - MAP_PAD * 2;

interface MiniMapProps {
  contentBounds: {
    minX: number;
    minY: number;
    width: number;
    height: number;
  };
  showMiniMapProg: SharedValue<number>;
  skiaImages: LayoutNode[];
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
  scale: SharedValue<number>;
  top: number;
}

const MiniMap = ({
  contentBounds,
  skiaImages,
  translateY,
  translateX,
  scale,
  showMiniMapProg,
  top,
}: MiniMapProps) => {
  const { mode } = usePersistentAppStore();

  const MINIMAP_Y = mode === "expert" ? top + 56 : top + 1;

  const preciseDots = useMemo(() => {
    if (skiaImages.length === 0 || contentBounds.width === 0) return [];

    const effectiveWidth = Math.max(contentBounds.width, 500);
    const effectiveHeight = Math.max(contentBounds.height, 500);

    return skiaImages.map((img) => {
      const normX = (img.x - contentBounds.minX) / effectiveWidth;
      const normY = (img.y - contentBounds.minY) / effectiveHeight;

      return {
        x: MINIMAP_X + MAP_PAD + normX * DRAW_W,
        y: MINIMAP_Y + MAP_PAD + normY * DRAW_H,
      };
    });
  }, [skiaImages, contentBounds, MINIMAP_Y]);

  const rectProps = useDerivedValue(() => {
    if (contentBounds.width === 0) return { x: 0, y: 0, width: 0, height: 0 };

    const visibleGraphX = -translateX.value / scale.value;
    const visibleGraphY = -translateY.value / scale.value;
    const visibleGraphWidth = SCREEN_WIDTH / scale.value;
    const visibleGraphHeight = SCREEN_HEIGHT / scale.value;

    const normX = (visibleGraphX - contentBounds.minX) / contentBounds.width;
    const normY = (visibleGraphY - contentBounds.minY) / contentBounds.height;

    const rawX = normX * DRAW_W;
    const rawY = normY * DRAW_H;
    const rawW = (visibleGraphWidth / contentBounds.width) * DRAW_W;
    const rawH = (visibleGraphHeight / contentBounds.height) * DRAW_H;

    const clampedX = Math.max(0, Math.min(rawX, DRAW_W));
    const clampedY = Math.max(0, Math.min(rawY, DRAW_H));
    const clampedMaxX = Math.max(0, Math.min(rawX + rawW, DRAW_W));
    const clampedMaxY = Math.max(0, Math.min(rawY + rawH, DRAW_H));

    return {
      x: MINIMAP_X + MAP_PAD + clampedX,
      y: MINIMAP_Y + MAP_PAD + clampedY,
      width: clampedMaxX - clampedX,
      height: clampedMaxY - clampedY,
    };
  });

  const rectX = useDerivedValue(() => rectProps.value.x);
  const rectY = useDerivedValue(() => rectProps.value.y);
  const rectWidth = useDerivedValue(() => rectProps.value.width);
  const rectHeight = useDerivedValue(() => rectProps.value.height);

  const blurRadius = useSharedValue(0);
  const minimapY = useSharedValue(0);
  const miniMapWidth = useSharedValue(MINIMAP_WIDTH);
  const minimapX = useSharedValue(MINIMAP_X);
  const overlayTint = useSharedValue("transparent");

  const colorTransform = useDerivedValue(() => {
    const animationProgress = interpolate(
      showMiniMapProg.value,
      [0, 1],
      [0.9, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
      },
    );

    return [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      25 * (1 - animationProgress),
      -8 * (1 - animationProgress),
    ];
  }, [showMiniMapProg]);

  useDerivedValue(() => {
    blurRadius.value = interpolate(showMiniMapProg.value, [0, 1], [0, 12, 0]);
    minimapY.value = interpolate(showMiniMapProg.value, [0, 1], [MINIMAP_Y, 0]);
    miniMapWidth.value = interpolate(
      showMiniMapProg.value,
      [0, 1],
      [MINIMAP_WIDTH, 0],
    );
    minimapX.value = (SCREEN_WIDTH - miniMapWidth.value) / 2;
    overlayTint.value = interpolateColor(
      showMiniMapProg.value,
      [0, 1],
      ["transparent", "#012"],
    );
  }, [showMiniMapProg]);

  const mapOpacity = useSharedValue(0);

  useEffect(() => {
    mapOpacity.value = withDelay(500, withTiming(1, { duration: 300 }));
  }, []);

  return (
    <Group
      opacity={mapOpacity}
      layer={
        <Paint>
          <Blur blur={blurRadius} />
          <ColorMatrix matrix={colorTransform} />
        </Paint>
      }
    >
      <RoundedRect
        r={28}
        width={DYNAMIC_ISLAND_WIDTH}
        height={DYNAMIC_ISLAND_HEIGHT}
        x={(SCREEN_WIDTH - DYNAMIC_ISLAND_WIDTH) / 2}
        y={18}
      />
      <RoundedRect
        x={minimapX}
        y={minimapY}
        width={miniMapWidth}
        height={MINIMAP_HEIGHT}
        r={RADIUS}
        color="rgba(0, 0, 0,1)"
      />
      <RoundedRect
        r={RADIUS}
        width={miniMapWidth}
        height={MINIMAP_HEIGHT}
        x={minimapX}
        y={minimapY}
        color={overlayTint}
      />

      <Group
        clip={Skia.RRectXY(
          Skia.XYWHRect(MINIMAP_X, MINIMAP_Y, MINIMAP_WIDTH, MINIMAP_HEIGHT),
          5,
          5,
        )}
        origin={vec(
          MINIMAP_X + MINIMAP_WIDTH / 2,
          MINIMAP_Y + MINIMAP_HEIGHT / 2,
        )}
        transform={[{ scale: 0.7 }]}
      >
        {preciseDots.map((e, i) => (
          <Circle
            key={i}
            cx={e.x}
            cy={e.y}
            r={skiaImages.length < 25 ? 2 : 0.75}
            color="white"
            opacity={1}
          />
        ))}

        <Rect
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeight}
          color="white"
          style="stroke"
          strokeWidth={1.5}
        />
      </Group>
    </Group>
  );
};

export { MiniMap };
