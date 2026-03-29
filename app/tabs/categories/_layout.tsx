import { useAnimationStore } from "@/store/global";
import { SPRING_CONFIG } from "@/utils/constants";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { router, Stack } from "expo-router";
import { Share, useColorScheme, View } from "react-native";
import { LogBox } from "react-native";
import { withSpring } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { usePersistentAppStore } from "@/store/global-persistent";
import {
  NativeStackHeaderItemMenuAction,
  NativeStackHeaderItemMenuSubmenu,
} from "@react-navigation/native-stack";

LogBox.ignoreLogs([
  "The screen '[id]' was removed natively but didn't get removed from JS state",
]);
export default function StyleIdLayout() {
  const { showMiniMapProg } = useAnimationStore();
  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";

  const { setLng, lng, mode, setMode } = usePersistentAppStore();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: mode !== "expert",
          headerTransparent: true,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "Explore",
          unstable_headerLeftItems: (props) => [
            // {
            //   type: "button",
            //   label: "back",
            //   icon: {
            //     name: "arrow.backward",
            //     type: "sfSymbol",
            //   },
            //   // variant: "done",
            //   onPress: () => {
            //     router.back();
            //   },
            // },
            {
              type: "button",
              label: lng === "en" ? "Syllabics Mode" : "English Mode",
              ...(mode === "expert"
                ? {
                    icon: {
                      name: lng === "en" ? "character.textbox" : "a.square",
                      type: "sfSymbol",
                    },
                  }
                : {}),
              variant: "plain",
              onPress: () => {
                setLng(lng === "en" ? "cr" : "en");
              },
              accessibilityLabel: "Search items",
            },
          ],
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
                  ...(mode === "expert"
                    ? [
                        {
                          type: "action",
                          state: showMiniMapProg.value === 0 ? "on" : "off",
                          label: "Show Map",
                          icon: {
                            name: "map.fill",
                            type: "sfSymbol",
                          },
                          onPress: () => {
                            const newValue =
                              showMiniMapProg.value === 0 ? 1 : 0;
                            showMiniMapProg.value = withSpring(
                              newValue,
                              SPRING_CONFIG,
                            );
                          },
                        } as NativeStackHeaderItemMenuAction,
                      ]
                    : []),
                  {
                    type: "submenu",
                    label: "Switch Mode",
                    icon: {
                      name: "person.2.badge",
                      type: "sfSymbol",
                    },
                    items: [
                      {
                        state: mode === "learner" ? "on" : "off",
                        type: "action",
                        label: "Learner Mode",
                        description:
                          "Designed for beginners to build foundational Cree vocabulary.",
                        onPress: () => setMode("learner"),
                        icon: {
                          name: "book.closed",
                          type: "sfSymbol",
                        },
                      },
                      {
                        state: mode === "teacher" ? "on" : "off",
                        type: "action",
                        label: "Teacher Mode",
                        description:
                          "Create lesson plans and manage word collections for students.",
                        onPress: () => setMode("teacher"),
                        icon: {
                          name: "rectangle.and.pencil.and.ellipsis",
                          type: "sfSymbol",
                        },
                      },
                      {
                        state: mode === "expert" ? "on" : "off",
                        type: "action",
                        label: "Expert Mode",
                        description: "Advanced linguistic analysis and filters",
                        onPress: () => setMode("expert"),
                        icon: {
                          name: "magnifyingglass.circle",
                          type: "sfSymbol",
                        },
                      },
                    ],
                  },
                  {
                    type: "submenu",
                    label: "Sort",
                    icon: {
                      name: "line.3.horizontal.decrease.circle",
                      type: "sfSymbol",
                    },
                    items: [
                      {
                        type: "action",
                        label: "Alphabetical (A-Z)",
                        onPress: () => {},
                        icon: {
                          name: "character.cursor.ibeam",
                          type: "sfSymbol",
                        },
                      },
                      {
                        type: "action",
                        label: "Most Recent",
                        description: "See recently researched words first.",
                        onPress: () => {},
                        icon: { name: "clock", type: "sfSymbol" },
                      },
                      // ...(mode === "expert"
                      //   ? [
                      //       {
                      //         type: "action",
                      //         label: "Semantic Gaps",
                      //         description:
                      //           "Highlight words missing Cree/English equivalents.",
                      //         onPress: () => {},
                      //         icon: {
                      //           name: "exclamationmark.magnifyingglass",
                      //           type: "sfSymbol",
                      //         },
                      //       } as NativeStackHeaderItemMenuAction,
                      //     ]
                      //   : []),
                    ],
                  },
                ],
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
              type: "button",
              label: "Show Map",
              variant: "done",
              icon: {
                name: "map.fill",
                type: "sfSymbol",
              },
              onPress: () => {
                Haptics.selectionAsync();
                const newValue = showMiniMapProg.value === 0 ? 1 : 0;
                showMiniMapProg.value = withSpring(newValue, SPRING_CONFIG);
              },
            },
          ],
        }}
      />
    </Stack>
  );
}
