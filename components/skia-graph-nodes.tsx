import { Platform } from "react-native";
import React from "react";
import {
  Group,
  Mask,
  matchFont,
  rect,
  RoundedRect,
  Text,
  rrect,
  Rect,
  listFontFamilies,
} from "@shopify/react-native-skia";
import {
  interpolate,
  SharedValue,
  useAnimatedReaction,
  useDerivedValue,
} from "react-native-reanimated";
import { LayoutNode } from "@/utils/types";

// ── Font ──────────────────────────────────────────────────────────────────────

const font = matchFont({
  fontFamily: Platform.select({ ios: "System" }),
  fontSize: 20,
  fontWeight: "bold",
});

const rootFont = matchFont({
  fontFamily: Platform.select({ ios: "System" }),
  fontSize: 30,
  fontWeight: "bold",
});

const newfont = matchFont({
  fontFamily: Platform.select({ ios: "System" }),
  fontSize: 12,
  fontWeight: "normal",
});

const rootnewfont = matchFont({
  fontFamily: Platform.select({ ios: "System" }),
  fontSize: 20,
  fontWeight: "normal",
});
const familyNames = listFontFamilies();
console.log(familyNames);
const DEPTH_COLORS = [
  "#7F77DD", // depth 0 — root
  "#1D9E75", // depth 1
  "#D85A30", // depth 2
  "#378ADD", // depth 3+
];

const DEPTH_STROKES = ["#534AB7", "#0F6E56", "#993C1D", "#185FA5"];

const RADIUS = 34;

function depthColor(depth: number, strokes: string[]) {
  return strokes[Math.min(depth, strokes.length - 1)];
}

const PADDING_X = 12;
const PADDING_Y = 8;

const SkiaGraphNode = ({
  progress,
  node,
  newNode,
  selectedNode,
}: {
  progress: SharedValue<number>;
  node: LayoutNode;
  selectedNode: SharedValue<string>;
  newNode?: boolean;
}) => {
  const fill = depthColor(node.depth, DEPTH_COLORS);
  const stroke = depthColor(node.depth, DEPTH_STROKES);

  // 1. Pick the correct font for this node
  const currentFont = node.isRoot ? rootFont : font;
  const currentNewFont = node.isRoot ? rootnewfont : newfont;

  // 2. Measure the actual text size (fallback to 0 if font isn't loaded yet)
  const textWidth = currentFont ? currentFont.measureText(node.label).width : 0;
  const textHeight = currentFont
    ? currentFont.measureText(node.label).height
    : 0;

  // 3. APPLY PADDING: Add padding to both sides of the text
  const paddedTextWidth = textWidth + PADDING_X * 2;
  const paddedTextHeight = textHeight + PADDING_Y * 2;

  // 4. The actual box size should be whichever is bigger: the hardcoded layout size OR the padded text
  //   const boxWidth = Math.max(node.width, paddedTextWidth);
  //   const boxHeight = Math.max(node.height, paddedTextHeight);

  const boxWidth = paddedTextWidth;
  const boxHeight = paddedTextHeight;

  // 5. Find the center point of the layout engine's intended position
  const centerX = node.isRoot
    ? node.x + node.width / 2 + textHeight
    : node.x + node.width / 2;
  const centerY = node.y + node.height / 2;

  // 6. Shift the new dynamic box so it stays perfectly centered over the edge lines
  const boxX = centerX - boxWidth / 2;
  const boxY = centerY - boxHeight / 2;

  // 7. DYNAMIC WIDTH: Now the progress bar animates precisely to the new padded box width!
  const dvwidth = useDerivedValue(() => {
    if (selectedNode.get() === node.id) {
      return interpolate(progress.value, [0, 1], [0, boxWidth]);
    }
    return 0;
  });

  return (
    <>
      {newNode && (
        <Text
          font={currentNewFont}
          x={centerX - textWidth / 2 + textWidth + 5}
          y={centerY + textHeight / 2 - 3 - textHeight - 5}
          text={"New"}
          color={"red"}
        />
      )}
      <Group
        clip={rrect(rect(boxX, boxY, boxWidth, boxHeight), RADIUS, RADIUS)}
      >
        <RoundedRect
          height={boxHeight}
          width={boxWidth}
          color={"#f1f1f1"}
          r={RADIUS}
          x={boxX}
          y={boxY}
        />

        <Rect
          height={boxHeight}
          width={dvwidth}
          color={"#0088ff"}
          x={boxX}
          y={boxY}
        />

        <Mask
          mask={
            <Text
              font={currentFont}
              x={centerX - textWidth / 2}
              y={centerY + textHeight / 2 - 3}
              text={node.label}
            />
          }
          clip={false}
        >
          <RoundedRect
            height={boxHeight}
            width={dvwidth}
            color={"white"}
            r={RADIUS}
            x={boxX}
            y={boxY}
          />
        </Mask>
      </Group>
    </>
  );
};

export default SkiaGraphNode;
