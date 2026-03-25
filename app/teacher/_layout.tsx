import { DynamicColorIOS, View } from "react-native";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useCallback, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PresetsLayout() {
  const insets = useSafeAreaInsets();
  const paddingTop = useSharedValue(insets.top);
  const fixAnimation = useCallback(() => {
    paddingTop.set(insets.top);
    const timer = setTimeout(() => {
      paddingTop.set(0);
    }, 400);

    return () => clearTimeout(timer);
  }, [insets.top, paddingTop]);

  useFocusEffect(fixAnimation);
  const animatedStyle = useAnimatedStyle(() => ({
    paddingTop: paddingTop.get(),
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
            sf="house.fill"
            drawable="ic_menu_location"
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="collections">
          <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge>
          <NativeTabs.Trigger.Label>Collection</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="gear" drawable="ic_menu_location" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="search" role="search">
          <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </Animated.View>
  );
}
