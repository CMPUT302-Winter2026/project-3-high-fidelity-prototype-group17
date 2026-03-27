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
  angle: number;
  startAngle: number;
  endAngle: number;
  subtreeSize: number;
};

export type Edge = {
  id: string;
  x1: number;
  y1: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  x2: number;
  y2: number;
};
