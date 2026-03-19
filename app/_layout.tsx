import "react-native-reanimated";
import { PressablesConfig } from "pressto";
import * as Haptics from "expo-haptics";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Easing, interpolate, interpolateColor } from "react-native-reanimated";
import Transition from "react-native-screen-transitions";
import { Stack } from "@/layouts/stack";
import { BlankStack } from "@/layouts/blank-stack";
import "../global.css";

export default function RootLayout() {
  return (
    <PressablesConfig
      globalHandlers={{
        onPress: () => {
          Haptics.selectionAsync();
        },
      }}
    >
      <GestureHandlerRootView>
        <BlankStack>
          <BlankStack.Screen
            name="linear"
            options={{
              gestureDirection: "vertical",
              gestureEnabled: true,
              screenStyleInterpolator: (props) => {
                "worklet";
                if (props.focused) {
                  const y = interpolate(
                    props.progress,
                    [0, 1],
                    [props.layouts.screen.height, 0],
                  );
                  const overlayOpacity = interpolate(
                    props.progress,
                    [0, 1],
                    [0, 1],
                  );
                  return {
                    contentStyle: {
                      transform: [{ translateY: y }],
                    },
                    overlayStyle: {
                      opacity: overlayOpacity,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                  };
                }
                return {};
              },
              transitionSpec: {
                open: Transition.Specs.DefaultSpec,
                close: Transition.Specs.DefaultSpec,
              },
            }}
          />
          <BlankStack.Screen
            name="swerving"
            options={{
              gestureDirection: "vertical",
              gestureEnabled: true,
              screenStyleInterpolator: (props) => {
                "worklet";
                if (props.focused) {
                  const y = interpolate(
                    props.progress,
                    [0, 1],
                    [props.layouts.screen.height, 0],
                  );
                  const overlayOpacity = interpolate(
                    props.progress,
                    [0, 1],
                    [0, 1],
                  );
                  return {
                    contentStyle: {
                      transform: [{ translateY: y }],
                    },
                    overlayStyle: {
                      opacity: overlayOpacity,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                  };
                }
                return {};
              },
              transitionSpec: {
                open: Transition.Specs.DefaultSpec,
                close: Transition.Specs.DefaultSpec,
              },
            }}
          />
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "white",
              },
            }}
          />
          <Stack.Screen
            name="examples/delete-warning"
            options={{
              enableTransitions: true,
              gestureEnabled: true,
              gestureDirection: "vertical",
              screenStyleInterpolator: ({ current, next, layouts }) => {
                "worklet";

                const progress = current.progress + (next?.progress ?? 0);

                const fifthHeight = layouts.screen.height / 5;

                const unfocusedY = interpolate(
                  next?.progress ?? 0,
                  [0, 1],
                  [0, -fifthHeight],
                );
                const focusedY = interpolate(
                  current?.progress ?? 0,
                  [0, 1],
                  [fifthHeight, 0],
                );

                const borderRadius = interpolate(
                  progress,
                  [0, 1, 2],
                  [0, 0, 36],
                );

                return {
                  contentStyle: {
                    transform: [
                      { translateY: focusedY },
                      { translateY: unfocusedY },
                    ],
                    borderRadius: borderRadius,
                  },
                };
              },
              transitionSpec: {
                close: {
                  duration: 600,
                  easing: Easing.bezierFn(0.19, 1, 0.22, 1),
                },
                open: {
                  duration: 600,
                  easing: Easing.bezierFn(0.19, 1, 0.22, 1),
                },
              },
            }}
          />
          <Stack.Screen
            name="teacher"
            options={{ title: "Zoom In", ...Transition.Presets.ZoomIn() }}
          />
        </BlankStack>
      </GestureHandlerRootView>
    </PressablesConfig>
  );
}
