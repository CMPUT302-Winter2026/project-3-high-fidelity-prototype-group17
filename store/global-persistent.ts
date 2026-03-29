import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { createMMKV } from "react-native-mmkv";
import { create } from "zustand";
import { RawNode } from "@/utils/types";
import i18n from "@/i18next/i18next";
import { RAW_NODES } from "@/utils/data";

const storage = createMMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => storage.set(name, value),
  getItem: (name) => storage.getString(name) ?? null,
  removeItem: (name) => storage.remove(name),
};

export type CollectedNode = RawNode & {
  dateAdded: number;
  description?: string;
};

export type Collection = {
  id: string;
  name: string;
  nodes: CollectedNode[];
  rootIds: string[];
};

interface GlobalAppState {
  mode: "learner" | "teacher" | "expert";
  setMode: (e: "learner" | "teacher" | "expert") => void;
  collections: Collection[];

  createCollection: (name: string) => string;
  deleteCollection: (id: string) => void;
  addNodeToCollection: (collectionId: string, node: CollectedNode) => void;
  removeNodeFromCollection: (collectionId: string, nodeId: string) => void;

  toDeleteId: string | null;
  setToDeleteId: (e: string | null) => void;

  lng: "en" | "cr";
  setLng: (e: "en" | "cr") => void;
}

export const usePersistentAppStore = create<GlobalAppState>()(
  persist(
    (set) => ({
      mode: "learner",
      lng: "en",
      collections: [],
      toDeleteId: null,

      setMode: (name) => set({ mode: name }),
      setToDeleteId: (id) => set({ toDeleteId: id }),
      setLng: (e) => {
        i18n.changeLanguage(e);
        set({ lng: e });
      },

      createCollection: (name) => {
        const newId = Date.now().toString();

        set((state) => ({
          collections: [
            ...state.collections,
            { id: newId, name, nodes: [], rootIds: [] },
          ],
        }));

        return newId;
      },

      deleteCollection: (id) =>
        set((state) => ({
          collections: state.collections.filter((c) => c.id !== id),
        })),
      addNodeToCollection: (collectionId, primaryNode) =>
        set((state) => ({
          collections: state.collections.map((col) => {
            if (col.id !== collectionId) return col;

            const now = Date.now();
            let updatedNodes = [...col.nodes];

            // 1. Helper to add node
            const tryAddNode = (nodeToAdd: RawNode) => {
              const exists = updatedNodes.some((n) => n.id === nodeToAdd.id);
              if (!exists) {
                updatedNodes.push({
                  ...nodeToAdd,
                  dateAdded: now,
                  description: primaryNode.description,
                });
              }
            };

            // 2. Initial ingest of primary and neighbors from RAW_DATA
            tryAddNode(primaryNode);
            const neighborIds = new Set<string>(primaryNode.children || []);
            RAW_NODES.forEach((node) => {
              if (node.children?.includes(primaryNode.id))
                neighborIds.add(node.id);
            });

            neighborIds.forEach((neighborId) => {
              const data = RAW_NODES.find((n) => n.id === neighborId);
              if (data) tryAddNode(data);
            });

            // 3. SANITIZATION: Filter children of every node in the collection
            // to ONLY include IDs that actually exist in this collection
            const collectedIds = new Set(updatedNodes.map((n) => n.id));

            updatedNodes = updatedNodes.map((node) => ({
              ...node,
              children: (node.children || []).filter((cid) =>
                collectedIds.has(cid),
              ),
            }));

            // 4. DYNAMIC ROOT CALCULATION
            const childIdsInCollection = new Set<string>();
            updatedNodes.forEach((n) => {
              n.children?.forEach((cid) => childIdsInCollection.add(cid));
            });

            const updatedRootIds = updatedNodes
              .filter((n) => !childIdsInCollection.has(n.id))
              .map((n) => n.id);

            return { ...col, nodes: updatedNodes, rootIds: updatedRootIds };
          }),
        })),

      removeNodeFromCollection: (collectionId, nodeId) =>
        set((state) => ({
          collections: state.collections.map((col) => {
            if (col.id !== collectionId) return col;

            // 1. Filter out the node
            let updatedNodes = col.nodes.filter((n) => n.id !== nodeId);

            // 2. RE-SANITIZE: Since a node was removed, other nodes might now
            // have a "ghost" child reference to the deleted node.
            const collectedIds = new Set(updatedNodes.map((n) => n.id));
            updatedNodes = updatedNodes.map((node) => ({
              ...node,
              children: (node.children || []).filter((cid) =>
                collectedIds.has(cid),
              ),
            }));

            // 3. RE-CALCULATE ROOTS
            const childIdsInCollection = new Set<string>();
            updatedNodes.forEach((n) => {
              n.children?.forEach((cid) => childIdsInCollection.add(cid));
            });

            const updatedRootIds = updatedNodes
              .filter((n) => !childIdsInCollection.has(n.id))
              .map((n) => n.id);

            return { ...col, nodes: updatedNodes, rootIds: updatedRootIds };
          }),
        })),
    }),
    {
      name: "global-app-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
