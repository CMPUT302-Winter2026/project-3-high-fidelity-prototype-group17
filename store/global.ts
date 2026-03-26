import { create } from "zustand";
import { makeMutable, SharedValue, withTiming } from "react-native-reanimated";

interface GlobalAnimationState {
  showMiniMapProg: SharedValue<number>;

  //   isDragging: boolean;
  //   setIsDragging: (state: boolean) => void;

  resetshowMiniMapProg: () => void;
}

export const useAnimationStore = create<GlobalAnimationState>((set, get) => ({
  showMiniMapProg: makeMutable(0),

  //   isDragging: false,
  //   setIsDragging: (state) => set({ isDragging: state }),

  resetshowMiniMapProg: () => {
    get().showMiniMapProg.value = withTiming(0);
  },
}));
