import { Edge, LayoutNode, RawNode } from "./types";

export type LayoutDirection = "horizontal" | "vertical";

const X_SPACING = 400; // Horizontal space between layers/nodes
const Y_SPACING = 200; // Vertical space between layers/nodes
const ROOT_NODE_SCALE_FACTOR = 1.2;
const HORIZONTAL_LEAF_SPACING = 100;
const VERTICAL_LEAF_SPACING = 300;
function buildOrthogonalTree(
  nodeMap: Map<string, RawNode>,
  rootId: string,
  offsetX: number,
  offsetY: number,
  direction: LayoutDirection,
): { nodes: LayoutNode[]; edges: Edge[]; treeLength: number } {
  const depthMap = new Map<string, number>();
  const queue: string[] = [rootId];
  depthMap.set(rootId, 0);

  let maxDepth = 0;

  // Phase 1: Assign depths and track the maximum depth
  while (queue.length > 0) {
    const id = queue.shift()!;
    const node = nodeMap.get(id);
    if (!node) continue;

    const depth = depthMap.get(id)!;
    maxDepth = Math.max(maxDepth, depth);

    for (const cid of node.children ?? []) {
      if (!depthMap.has(cid)) {
        depthMap.set(cid, depth + 1);
        queue.push(cid);
      }
    }
  }

  // Phase 2: Assign coordinates on the secondary axis from leaves up to the root
  const secondaryPosMap = new Map<string, number>();
  let currentLeafPos = 0;

  const leafSpacing =
    direction === "horizontal"
      ? HORIZONTAL_LEAF_SPACING
      : VERTICAL_LEAF_SPACING;

  function assignSecondaryPos(id: string): number {
    const node = nodeMap.get(id)!;
    const children = node.children ?? [];

    if (children.length === 0) {
      const pos = currentLeafPos;
      secondaryPosMap.set(id, pos);
      currentLeafPos += leafSpacing;
      return pos;
    }

    let sumPos = 0;
    for (const cid of children) {
      sumPos += assignSecondaryPos(cid);
    }
    const avgPos = sumPos / children.length;
    secondaryPosMap.set(id, avgPos);
    return avgPos;
  }

  if (nodeMap.has(rootId)) assignSecondaryPos(rootId);

  // Phase 3: Build cartesian coordinates based on direction
  const layoutNodes: LayoutNode[] = [];
  const layoutMap = new Map<string, LayoutNode>();

  for (const [id, depth] of depthMap.entries()) {
    const node = nodeMap.get(id)!;
    const secondaryPos = secondaryPosMap.get(id)!;

    const isRoot = depth === 0;
    const scaledWidth = isRoot
      ? node.width * ROOT_NODE_SCALE_FACTOR
      : node.width;
    const scaledHeight = isRoot
      ? node.height * ROOT_NODE_SCALE_FACTOR
      : node.height;

    let finalX = 0;
    let finalY = 0;

    if (direction === "horizontal") {
      finalX = depth * X_SPACING + offsetX;
      // Offset the Y by half the height difference so it scales from the center
      const heightDiff = scaledHeight - node.height;
      finalY = secondaryPos + offsetY - heightDiff / 2;
    } else {
      // Offset the X by half the width difference so it scales from the center
      const widthDiff = scaledWidth - node.width;
      finalX = secondaryPos + offsetX - widthDiff / 2;
      finalY = depth * Y_SPACING + offsetY;
    }

    const layoutNode: LayoutNode = {
      ...node,
      width: scaledWidth, // Use scaled width
      height: scaledHeight, // Use scaled height
      isRoot, // <-- Populate the flag here
      depth,
      angle: 0,
      startAngle: 0,
      endAngle: 0,
      subtreeSize: 0,
      x: finalX,
      y: finalY,
    };

    layoutNodes.push(layoutNode);
    layoutMap.set(id, layoutNode);
  }

  // Phase 4: Edges flowing dynamically
  const edges: Edge[] = [];
  for (const id of depthMap.keys()) {
    const node = nodeMap.get(id)!;
    if (!node.children) continue;

    const parent = layoutMap.get(id)!;

    for (const cid of node.children) {
      const child = layoutMap.get(cid);
      if (!child) continue;

      let px, py, cx1, cy1, cx2, cy2, x2, y2;

      if (direction === "horizontal") {
        px = parent.x + parent.width;
        py = parent.y + parent.height / 2;
        x2 = child.x;
        y2 = child.y + child.height / 2;

        const smoothing = (x2 - px) / 2;
        cx1 = px + smoothing;
        cy1 = py;
        cx2 = x2 - smoothing;
        cy2 = y2;
      } else {
        px = parent.x + parent.width / 2;
        py = parent.y + parent.height;
        x2 = child.x + child.width / 2;
        y2 = child.y;

        const smoothing = (y2 - py) / 2;
        cx1 = px;
        cy1 = py + smoothing;
        cx2 = x2;
        cy2 = y2 - smoothing;
      }

      edges.push({
        id: `${id}-${cid}`,
        x1: px,
        y1: py,
        cx1,
        cy1,
        cx2,
        cy2,
        x2,
        y2,
      });
    }
  }

  // Calculate how much space this tree took up in the direction of growth
  const treeLength =
    direction === "horizontal"
      ? maxDepth * X_SPACING + 150
      : maxDepth * Y_SPACING + 50;

  return { nodes: layoutNodes, edges, treeLength };
}

// ── Orthogonal Forest Layout Engine ───────────────────────────────────────
const FOREST_SPACING = 200; // Extra pixels of breathing room between separate trees

export function buildOrthogonalForestLayout(
  nodes: RawNode[],
  rootIds: string[],
  direction: LayoutDirection = "horizontal",
) {
  const nodeMap = new Map<string, RawNode>(nodes.map((n) => [n.id, n]));

  const allNodes: LayoutNode[] = [];
  const allEdges: Edge[] = [];

  let currentOffset = 0; // Tracks X if horizontal, Y if vertical

  for (const rootId of rootIds) {
    if (!nodeMap.has(rootId)) continue;

    const offsetX = direction === "horizontal" ? currentOffset : 0;
    const offsetY = direction === "horizontal" ? 0 : currentOffset;

    const {
      nodes: treeNodes,
      edges: treeEdges,
      treeLength,
    } = buildOrthogonalTree(nodeMap, rootId, offsetX, offsetY, direction);

    allNodes.push(...treeNodes);
    allEdges.push(...treeEdges);

    currentOffset += treeLength + FOREST_SPACING;
  }

  return { nodes: allNodes, edges: allEdges };
}
