import { DynamicColorIOS, Text, View } from "react-native";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePersistentAppStore } from "@/store/global-persistent";
import { usePathname } from "expo-router";
import { SymbolView } from "expo-symbols";
import { GraphScreenHelper } from "@/components/graph-screen-helper";
import { UserModeHelper } from "@/components/user-mode-helper";

export default function PresetsLayout() {
  const insets = useSafeAreaInsets();
  const paddingTop = useSharedValue(insets.top);
  const { mode } = usePersistentAppStore();

  const path = usePathname();

  useEffect(() => {
    paddingTop.value = withTiming(0, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    paddingTop: paddingTop.value,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <NativeTabs
        minimizeBehavior="onScrollDown"
        labelStyle={{
          color: DynamicColorIOS({
            dark: "white",
            light: "black",
          }),
        }}
      >
        {path.includes("/tabs/categories/") ||
        path.includes("/tabs/collections/") ||
        (mode === "expert" && path.includes("/tabs/categories")) ? (
          <NativeTabs.BottomAccessory>
            <GraphScreenHelper />
          </NativeTabs.BottomAccessory>
        ) : (
          <NativeTabs.BottomAccessory>
            <UserModeHelper />
          </NativeTabs.BottomAccessory>
        )}

        <NativeTabs.Trigger name="categories">
          <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf="square.grid.2x2.fill"
            drawable="ic_menu_view_as_grid"
          />
        </NativeTabs.Trigger>

        {mode !== "learner" && (
          <NativeTabs.Trigger name="collections">
            <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge>
            <NativeTabs.Trigger.Label>Collection</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf="rectangle.stack.fill"
              drawable="ic_menu_archive"
            />
          </NativeTabs.Trigger>
        )}
        <NativeTabs.Trigger name="search" role="search">
          <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf="magnifyingglass"
            drawable="ic_menu_search"
          />
        </NativeTabs.Trigger>

        {mode === "learner" && (
          <NativeTabs.Trigger name="kona-ai">
            <NativeTabs.Trigger.Label>Kona AI</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="sparkles" drawable="ic_menu_manage" />
          </NativeTabs.Trigger>
        )}
      </NativeTabs>
    </Animated.View>
  );
}
