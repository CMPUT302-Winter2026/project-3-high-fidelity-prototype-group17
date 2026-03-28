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

function GraphScreenHelper() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <View className="flex-row gap-2 items-center justify-center">
        <SymbolView
          name={{
            ios: "hand.tap.fill",
            android: "touch_app",
            web: "touch_app",
          }}
          size={20}
        />
        <View className="flex-col items-start justify-center h-full ">
          <Text className="font-bold text-sm" style={{ fontFamily: "system" }}>
            How to explore
          </Text>
          <Text className="text-sm -mt-1" style={{ fontFamily: "system" }}>
            Press and hold any node to view its details.
          </Text>
        </View>
      </View>
    </View>
  );
}

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
        {(path.includes("/tabs/categories/") ||
          path.includes("/tabs/collections/")) && (
          <NativeTabs.BottomAccessory>
            <GraphScreenHelper />
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
