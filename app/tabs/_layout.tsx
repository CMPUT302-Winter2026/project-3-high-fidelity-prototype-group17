import { DynamicColorIOS } from "react-native";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PresetsLayout() {
  const insets = useSafeAreaInsets();
  const paddingTop = useSharedValue(insets.top);

  useEffect(() => {
    paddingTop.value = withTiming(0, { duration: 400 });
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
        <NativeTabs.Trigger name="categories">
          <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf="square.grid.2x2.fill"
            drawable="ic_menu_view_as_grid"
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="collections">
          <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge>
          <NativeTabs.Trigger.Label>Collection</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf="rectangle.stack.fill"
            drawable="ic_menu_archive"
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="search" role="search">
          <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf="magnifyingglass"
            drawable="ic_menu_search"
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="kona-ai">
          <NativeTabs.Trigger.Label>Kona AI</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="sparkles" drawable="ic_menu_manage" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </Animated.View>
  );
}
