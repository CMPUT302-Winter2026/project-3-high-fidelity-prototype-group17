import { useAnimationStore } from "@/store/global";
import { SPRING_CONFIG } from "@/utils/constants";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { router, Stack } from "expo-router";
import { Share, useColorScheme, View } from "react-native";
import { LogBox } from "react-native";
import { withSpring } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { usePersistentAppStore } from "@/store/global-persistent";

LogBox.ignoreLogs([
  "The screen '[id]' was removed natively but didn't get removed from JS state",
]);

LogBox.ignoreLogs([
  "The screen 'lesson-plan' was removed natively but didn't get removed from JS state.",
]);
export default function StyleIdLayout() {
  const { showMiniMapProg } = useAnimationStore();
  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";

  const { setLng, lng } = usePersistentAppStore();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "Collection",
          unstable_headerLeftItems: (props) => [
            {
              type: "button",
              label: lng === "en" ? "Syllabics Mode" : "English Mode",

              variant: "plain",
              onPress: () => {
                setLng(lng === "en" ? "cr" : "en");
              },
              accessibilityLabel: "Search items",
            },
          ],
          unstable_headerRightItems: (props) => [
            {
              type: "button",
              label: "switch language",
              icon: {
                name: "plus",
                type: "sfSymbol",
              },
              variant: "plain",
              onPress: () => {},
              accessibilityLabel: "Search items",
            },
            {
              type: "menu",
              variant: "prominent",
              icon: {
                name: "ellipsis",
                type: "sfSymbol",
              },
              label: "Options",
              menu: {
                title: "Explore Options",
                items: [
                  {
                    type: "action",
                    label: "Show List Info",
                    onPress: () => {},
                    icon: {
                      name: "info.circle",
                      type: "sfSymbol",
                    },
                  },
                  {
                    type: "action",
                    label: "Select Reminders",
                    onPress: () => {},
                    icon: {
                      name: "checkmark.circle",
                      type: "sfSymbol",
                    },
                  },
                  {
                    type: "submenu",
                    label: "Sort By",
                    icon: {
                      name: "arrow.up.arrow.down",
                      type: "sfSymbol",
                    },
                    items: [
                      {
                        type: "action",
                        label: "Manual",
                        onPress: () => console.log("Manual sort pressed"),
                        icon: {
                          name: "hand.point.up.left",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "action",
                        label: "Due Date",
                        onPress: () => console.log("Due Date sort pressed"),
                        icon: {
                          name: "calendar",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "action",
                        label: "Creation Date",
                        onPress: () =>
                          console.log("Creation Date sort pressed"),
                        icon: {
                          name: "plus.circle",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "action",
                        label: "Priority",
                        onPress: () => console.log("Priority sort pressed"),
                        icon: {
                          name: "exclamationmark.triangle",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "action",
                        label: "Title",
                        onPress: () => console.log("Title sort pressed"),
                        icon: {
                          name: "textformat.abc",
                          type: "sfSymbol",
                        },
                      },
                    ],
                  },
                  {
                    type: "submenu",
                    label: "Settings",
                    icon: {
                      name: "gear",
                      type: "sfSymbol",
                    },
                    items: [
                      {
                        type: "action",
                        label: "Notifications",
                        onPress: () => {},
                        icon: {
                          name: "bell",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "submenu",
                        label: "Advanced",
                        icon: {
                          name: "wrench.and.screwdriver",
                          type: "sfSymbol",
                        },
                        items: [
                          {
                            type: "action",
                            label: "Debug Mode",
                            onPress: () => {},
                            icon: {
                              name: "ladybug",
                              type: "sfSymbol",
                            },
                          },
                          {
                            type: "action",
                            label: "Reset Settings",
                            onPress: () => {},
                            icon: {
                              name: "arrow.clockwise",
                              type: "sfSymbol",
                            },
                            destructive: true,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "action",
                    label: "Print",
                    onPress: () => {},
                    icon: {
                      name: "printer",
                      type: "sfSymbol",
                    },
                  },
                  {
                    type: "action",
                    label: "Delete List",
                    onPress: () => {},
                    icon: {
                      name: "trash",
                      type: "sfSymbol",
                    },
                    destructive: true,
                  },
                ],
              },
            },
          ],
        }}
      />
      <Stack.Screen
        name="lesson-plan"
        getId={({ params }) => params?.id}
        options={{
          headerLargeTitle: false,
          headerTransparent: true,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "Lesson Plan",
          headerBackButtonMenuEnabled: true,
          headerBackButtonDisplayMode: "default",
          unstable_headerRightItems: (props) => [
            {
              type: "button",
              label: "back",
              icon: {
                name: "square.and.arrow.up",
                type: "sfSymbol",
              },
              variant: "done",
              onPress: async () => {
                try {
                  const result = await Share.share({
                    message: "Here is the blank lesson plan payload data...",
                    title: "Share Lesson Plan",
                  });
                } catch (error) {
                  console.error("Error sharing:", error);
                }
              },
            },
          ],
        }}
      />

      <Stack.Screen
        name="[id]"
        getId={({ params }) => params?.id}
        options={{
          headerLargeTitle: false,
          headerTransparent: true,
          headerBackButtonMenuEnabled: true,
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "",
          unstable_headerRightItems: (props) => [
            {
              type: "menu",
              variant: "prominent",
              icon: {
                name: "ellipsis",
                type: "sfSymbol",
              },
              label: "Options",
              menu: {
                title: "Explore Options",
                items: [
                  {
                    type: "action",
                    label: "Show Map",
                    icon: {
                      name: "map.fill",
                      type: "sfSymbol",
                    },
                    onPress: () => {
                      Haptics.selectionAsync();
                      const newValue = showMiniMapProg.value === 0 ? 1 : 0;
                      showMiniMapProg.value = withSpring(
                        newValue,
                        SPRING_CONFIG,
                      );
                    },
                  },
                  {
                    type: "action",
                    label: "Share lesson plan",
                    onPress: async () => {
                      try {
                        const result = await Share.share({
                          message:
                            "Here is the blank lesson plan payload data...",
                          title: "Share Lesson Plan",
                        });
                      } catch (error) {
                        console.error("Error sharing:", error);
                      }
                    },
                    icon: {
                      name: "square.and.arrow.up",
                      type: "sfSymbol",
                    },
                  },
                  {
                    type: "action",
                    label: "Create lesson plan",
                    onPress: () => {
                      router.push("/tabs/collections/lesson-plan");
                    },
                    icon: {
                      name: "doc.badge.plus",
                      type: "sfSymbol",
                    },
                  },
                ],
              },
            },
          ],
        }}
      />
    </Stack>
  );
}
