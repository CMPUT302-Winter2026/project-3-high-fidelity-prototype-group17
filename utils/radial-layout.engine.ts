import { LayoutNode, RawNode, Edge } from "./types";

const MIN_RING_SPACING = 200; // Minimum distance between parent and child rings
const NODE_PADDING = 1; // Extra physical pixel padding around nodes to prevent touching
const MIN_ARC = 0.2; // Lowered this! 1 radian is 57 degrees (too big). 0.2 is ~11 degrees.
const TREE_SPACING = 1000;
// ── Layout engine (pure JS, no ELK) ──────────────────────────────────────────
//
// Three-phase algorithm inspired by the blog's radial approach:
//
//  Phase 1 — BFS to assign depth (layer) to every node
//  Phase 2 — Recursive subtree-size calculation + angular slice assignment
//             Children with more descendants get a proportionally wider arc,
//             keeping related subtrees visually clustered.
//  Phase 3 — Polar → Cartesian: depth × RADIUS_INCREMENT gives the ring radius,
//             the midpoint of each node's angular slice gives its angle.

export function buildRadialLayout(
  nodeMap: Map<string, RawNode>,
  rootId: string,
  offsetX: number,
  offsetY: number,
): { nodes: LayoutNode[]; edges: Edge[]; maxRadius: number } {
  const depthMap = new Map<string, number>();
  const queue: string[] = [rootId];
  depthMap.set(rootId, 0);

  let maxDepth = 0;

  // ── Phase 1: BFS to assign depths ─────────────────────────────────────────
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

  // ── Phase 2: subtree sizes + angular slices ────────────────────────────────
  const subtreeSizeMap = new Map<string, number>();
  const startAngleMap = new Map<string, number>();
  const endAngleMap = new Map<string, number>();

  function calcSubtreeSize(id: string): number {
    const node = nodeMap.get(id)!;
    const children = node.children ?? [];
    if (children.length === 0) {
      subtreeSizeMap.set(id, 1);
      return 1;
    }
    let total = 0;
    for (const cid of children) total += calcSubtreeSize(cid);
    subtreeSizeMap.set(id, total + 1);
    return total + 1;
  }

  if (nodeMap.has(rootId)) calcSubtreeSize(rootId);

  function assignAngles(id: string, start: number, end: number): void {
    startAngleMap.set(id, start);
    endAngleMap.set(id, end);

    const node = nodeMap.get(id)!;
    const children = node.children ?? [];
    if (children.length === 0) return;

    const totalChildSize = children.reduce(
      (s, cid) => s + (subtreeSizeMap.get(cid) ?? 1),
      0,
    );
    const span = end - start;

    const slices = children.map((cid) => {
      const childSize = subtreeSizeMap.get(cid) ?? 1;
      const rawSlice = (childSize / totalChildSize) * span;
      return Math.max(rawSlice, MIN_ARC);
    });

    const totalSliceSpan = slices.reduce((acc, val) => acc + val, 0);
    const scaleFactor = totalSliceSpan > span ? span / totalSliceSpan : 1;

    let cursor = start;
    for (let i = 0; i < children.length; i++) {
      const cid = children[i];
      const slice = slices[i] * scaleFactor;
      assignAngles(cid, cursor, cursor + slice);
      cursor += slice;
    }
  }

  if (nodeMap.has(rootId)) assignAngles(rootId, 0, 2 * Math.PI);

  // ── Phase 2.5: Dynamically calculate required ring radii ─────────────────
  const radiusMap = new Map<number, number>();
  radiusMap.set(0, 0); // Root node is at the center (radius 0)

  for (let d = 1; d <= maxDepth; d++) {
    // Start with the minimum possible distance from the previous ring
    let requiredRadius = radiusMap.get(d - 1)! + MIN_RING_SPACING;

    // Find all nodes sitting at this current depth
    const nodesAtDepth = Array.from(depthMap.entries())
      .filter(([_, depth]) => depth === d)
      .map(([id]) => id);

    for (const id of nodesAtDepth) {
      const node = nodeMap.get(id)!;
      const start = startAngleMap.get(id) ?? 0;
      const end = endAngleMap.get(id) ?? 0;
      const span = end - start;

      // Ensure the physical arc length of this slice is wide enough for the node
      const maxNodeDimension = Math.max(node.width, node.height) + NODE_PADDING;

      if (span > 0) {
        // formula: ArcLength = radius * angle --> radius = ArcLength / angle
        const requiredRForThisNode = maxNodeDimension / span;
        if (requiredRForThisNode > requiredRadius) {
          requiredRadius = requiredRForThisNode;
        }
      }
    }

    radiusMap.set(d, requiredRadius);
  }

  const finalMaxRadius = radiusMap.get(maxDepth) ?? 0;

  // ── Phase 3: polar → cartesian using DYNAMIC radii ───────────────────────
  const layoutNodes: LayoutNode[] = [];
  const layoutMap = new Map<string, LayoutNode>();

  for (const [id, depth] of depthMap.entries()) {
    const node = nodeMap.get(id)!;
    const start = startAngleMap.get(id) ?? 0;
    const end = endAngleMap.get(id) ?? 0;
    const angle = depth === 0 ? 0 : (start + end) / 2;

    // Grab the dynamically calculated radius for this depth!
    const r = radiusMap.get(depth)!;
    const isRoot = depth === 0;
    const layoutNode: LayoutNode = {
      ...node,
      depth,
      isRoot,
      angle,
      startAngle: start,
      endAngle: end,
      subtreeSize: subtreeSizeMap.get(id) ?? 1,
      x: r * Math.cos(angle) - node.width / 2 + offsetX,
      y: r * Math.sin(angle) - node.height / 2 + offsetY,
    };

    layoutNodes.push(layoutNode);
    layoutMap.set(id, layoutNode);
  }

  // ── Edges: update control points to use dynamic radii ─────────────────────
  const edges: Edge[] = [];
  for (const id of depthMap.keys()) {
    const node = nodeMap.get(id)!;
    if (!node.children) continue;

    const parent = layoutMap.get(id)!;
    const px = parent.x + parent.width / 2;
    const py = parent.y + parent.height / 2;

    for (const cid of node.children) {
      const child = layoutMap.get(cid);
      if (!child) continue;

      const cx2v = child.x + child.width / 2;
      const cy2v = child.y + child.height / 2;

      // The middle point of the bezier curve should sit exactly halfway between the two dynamic rings
      const parentR = radiusMap.get(parent.depth)!;
      const childR = radiusMap.get(child.depth)!;
      const midR = (parentR + childR) / 2;

      const midAngle =
        child.depth === 0
          ? 0
          : ((startAngleMap.get(cid) ?? 0) + (endAngleMap.get(cid) ?? 0)) / 2;

      edges.push({
        id: `${id}-${cid}`,
        x1: px,
        y1: py,
        cx1: midR * Math.cos(parent.angle) + offsetX,
        cy1: midR * Math.sin(parent.angle) + offsetY,
        cx2: midR * Math.cos(midAngle) + offsetX,
        cy2: midR * Math.sin(midAngle) + offsetY,
        x2: cx2v,
        y2: cy2v,
      });
    }
  }

  return {
    nodes: layoutNodes,
    edges,
    maxRadius: finalMaxRadius, // Return the actual dynamic max radius
  };
}

// ── New Forest Layout Engine ────────────────────────────────────────────────

export function buildForestLayout(nodes: RawNode[], rootIds: string[]) {
  const nodeMap = new Map<string, RawNode>(nodes.map((n) => [n.id, n]));

  const allNodes: LayoutNode[] = [];
  const allEdges: Edge[] = [];

  let currentOffsetX = 0;
  let currentOffsetY = 0;
  let currentRowMaxRadius = 0;
  let colIndex = 0;

  for (const rootId of rootIds) {
    if (!nodeMap.has(rootId)) continue;

    const {
      nodes: treeNodes,
      edges: treeEdges,
      maxRadius,
    } = buildRadialLayout(nodeMap, rootId, currentOffsetX, currentOffsetY);

    allNodes.push(...treeNodes);
    allEdges.push(...treeEdges);

    currentRowMaxRadius = Math.max(currentRowMaxRadius, maxRadius);

    if (colIndex === 0) {
      currentOffsetX += maxRadius * 2 + TREE_SPACING;
      colIndex = 1;
    } else {
      currentOffsetX = 0;
      currentOffsetY += currentRowMaxRadius * 2 + TREE_SPACING;
      currentRowMaxRadius = 0;
      colIndex = 0;
    }
  }

  return { nodes: allNodes, edges: allEdges };
}
