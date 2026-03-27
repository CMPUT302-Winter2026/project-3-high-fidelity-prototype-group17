import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { createMMKV } from "react-native-mmkv";
import { create } from "zustand";
import { RawNode } from "@/utils/types";
import i18n from "@/i18next/i18next";

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
};

interface GlobalAppState {
  mode: "learner" | "teacher" | "expert";
  setMode: (e: "learner" | "teacher" | "expert") => void;
  collections: Collection[];

  createCollection: (name: string) => void;
  deleteCollection: (id: string) => void;
  addNodeToCollection: (collectionId: string, node: RawNode) => void;
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

      createCollection: (name) =>
        set((state) => ({
          collections: [
            ...state.collections,
            { id: Date.now().toString(), name, nodes: [] },
          ],
        })),

      deleteCollection: (id) =>
        set((state) => ({
          collections: state.collections.filter((c) => c.id !== id),
        })),

      addNodeToCollection: (collectionId, node) =>
        set((state) => ({
          collections: state.collections.map((col) => {
            if (col.id === collectionId) {
              // Avoid duplicates
              const exists = col.nodes.some((n) => n.id === node.id);
              if (exists) return col;

              return {
                ...col,
                nodes: [...col.nodes, { ...node, dateAdded: Date.now() }],
              };
            }
            return col;
          }),
        })),

      removeNodeFromCollection: (collectionId, nodeId) =>
        set((state) => ({
          collections: state.collections.map((col) => {
            if (col.id === collectionId) {
              return {
                ...col,
                nodes: col.nodes.filter((n) => n.id !== nodeId),
              };
            }
            return col;
          }),
        })),
    }),
    {
      name: "global-app-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
