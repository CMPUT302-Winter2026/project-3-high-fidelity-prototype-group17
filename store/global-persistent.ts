import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { createMMKV } from "react-native-mmkv";
import { create } from "zustand";

const storage = createMMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.remove(name);
  },
};
interface SelectedCollectionState {
  name: string;
  setName: (name: string) => void;
}

export const usePersistentCollectionStore = create<SelectedCollectionState>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) => set({ name }),
    }),
    {
      name: "collection-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
