// ── Graph definition ──────────────────────────────────────────────────────────
export type RawNode = {
  id: string;
  label: string;
  width: number;
  height: number;
  // list of ids of children nodes
  children?: string[];
};
export type LayoutNode = RawNode & {
  x: number;
  y: number;
  isRoot: boolean;
  depth: number;
  angle: number; // radians — centre of this node's angular slice
  startAngle: number;
  endAngle: number;
  subtreeSize: number;
};

export type Edge = {
  id: string;
  // cubic bezier control points
  x1: number;
  y1: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  x2: number;
  y2: number;
};

import React from "react";
import type { ScrollViewProps, ViewStyle, StyleProp } from "react-native";

interface IScrollProgress extends ScrollViewProps {
  children: React.ReactNode;
  renderInitialContent: () => React.ReactNode;
  renderEndContent: () => React.ReactNode;
  readonly endReachedThreshold?: number;
  readonly endResetThreshold?: number;
  readonly fabWidth?: number;
  readonly fabHeight?: number;
  readonly fabBottomOffset?: number;
  readonly fabBackgroundColor?: string;
  readonly fabEndBackgroundColor?: string;
  readonly fabBorderRadius?: number;
  readonly showFabOnScroll?: boolean;
  readonly fabAppearScrollOffset?: number;
  readonly fabEndScale?: number;
  readonly contentContainerStyle?: StyleProp<ViewStyle>;
  readonly initialContentContainerStyle?: StyleProp<ViewStyle>;
  readonly endContentContainerStyle?: StyleProp<ViewStyle>;
  readonly fabStyle?: StyleProp<ViewStyle>;
  readonly fabButtonStyle?: StyleProp<ViewStyle>;
  readonly onScrollProgressChange?: (progress: number) => void;
  readonly onEndReached?: () => void;
  readonly onEndReset?: () => void;
}

export type { IScrollProgress };
