import { isLiquidGlassAvailable } from "expo-glass-effect";
import { router, Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "The screen '[id]' was removed natively but didn't get removed from JS state",
]);
export default function StyleIdLayout() {
  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";
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
          title: "Explore",
          unstable_headerLeftItems: (props) => [
            {
              type: "button",
              label: "back",
              icon: {
                name: "arrow.backward",
                type: "sfSymbol",
              },
              // variant: "done",
              onPress: () => {
                router.back();
              },
            },
            {
              type: "button",
              label: "switch language",
              icon: {
                name: "globe",
                type: "sfSymbol",
              },
              variant: "plain",
              onPress: () => {},
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
        name="[id]"
        getId={({ params }) => params?.id}
        options={{
          headerLargeTitle: false,
          headerTransparent: true,
          headerBackButtonMenuEnabled: false,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "",
        }}
      />
    </Stack>
  );
}
