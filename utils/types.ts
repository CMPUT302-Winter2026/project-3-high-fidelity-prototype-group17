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
