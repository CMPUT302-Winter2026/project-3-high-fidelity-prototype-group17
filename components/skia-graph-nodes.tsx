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
  useFonts,
  useFont,
} from "@shopify/react-native-skia";
import {
  interpolate,
  SharedValue,
  useDerivedValue,
} from "react-native-reanimated";
import { LayoutNode } from "@/utils/types";
import { useTranslation } from "react-i18next";
import { usePersistentAppStore } from "@/store/global-persistent";

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
  const creeFont = useFont(
    require("../assets/fonts/NotoSansCanadianAboriginal-VariableFont_wght.ttf"),
    12,
  );
  const rootCreeFont = useFont(
    require("../assets/fonts/NotoSansCanadianAboriginal-VariableFont_wght.ttf"),
    20,
  );

  const { lng } = usePersistentAppStore();
  const fill = depthColor(node.depth, DEPTH_COLORS);
  const stroke = depthColor(node.depth, DEPTH_STROKES);

  const { t } = useTranslation();
  const label = t(node.nls_key);

  const meaning = node.sentences?.[0]?.setence || "";

  // 1. Pick the correct font for this node
  const currentFont =
    lng === "cr"
      ? node.isRoot
        ? rootCreeFont
        : creeFont
      : node.isRoot
        ? rootFont
        : font;
  const currentNewFont = node.isRoot ? rootnewfont : newfont;

  // 2. Measure the actual text size (fallback to 0 if font isn't loaded yet)
  const textWidth = currentFont ? currentFont.measureText(label).width : 0;
  const textHeight = currentFont ? currentFont.measureText(label).height : 0;

  const meaningWidth =
    currentNewFont && meaning ? currentNewFont.measureText(meaning).width : 0;
  const meaningHeight =
    currentNewFont && meaning ? currentNewFont.measureText(meaning).height : 0;

  // 3. Calculate compound text block dimensions
  const maxTextWidth = Math.max(textWidth, meaningWidth);
  const totalTextHeight = textHeight + (meaning ? meaningHeight + 4 : 0); // 4px gap

  // 4. APPLY PADDING
  const paddedTextWidth = maxTextWidth + PADDING_X * 2;
  const paddedTextHeight = totalTextHeight + PADDING_Y * 2;

  const boxWidth = paddedTextWidth;
  const boxHeight = paddedTextHeight;

  // 5. Find the center point
  const centerX = node.isRoot
    ? node.x + node.width / 2 + textHeight
    : node.x + node.width / 2;
  const centerY = node.y + node.height / 2;

  // 6. Shift the new dynamic box
  const boxX = centerX - boxWidth / 2;
  const boxY = centerY - boxHeight / 2;

  // Text Positions (Stacked vertically)
  const labelX = centerX - textWidth / 2;
  const labelY = centerY - totalTextHeight / 2 + textHeight - 3;

  const meaningX = centerX - meaningWidth / 2;
  const meaningY = labelY + meaningHeight + 4;

  // 7. DYNAMIC WIDTH
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

        {/* Added Base Text to ensure it's visible before the blue bar expands over it */}
        <Text
          font={currentFont}
          x={labelX}
          y={labelY}
          text={label}
          color="#111"
        />
        {meaning ? (
          <Text
            font={currentNewFont}
            x={meaningX}
            y={meaningY}
            text={meaning}
            color="#666"
          />
        ) : null}

        <Rect
          height={boxHeight}
          width={dvwidth}
          color={"#0088ff"}
          x={boxX}
          y={boxY}
        />

        <Mask
          mask={
            <Group>
              <Text font={currentFont} x={labelX} y={labelY} text={label} />
              {meaning ? (
                <Text
                  font={currentNewFont}
                  x={meaningX}
                  y={meaningY}
                  text={meaning}
                />
              ) : null}
            </Group>
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
