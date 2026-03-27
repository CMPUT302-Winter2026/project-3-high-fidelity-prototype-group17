import Transition from "react-native-screen-transitions";
import { Tray } from "@/components/tray";
import { BlankStack } from "@/layouts/blank-stack";

export default function TrayRoutesLayout() {
  return (
    <BlankStack>
      <BlankStack.Screen
        name="index"
        options={{
          screenStyleInterpolator: (props) => {
            "worklet";

            const trayStyles = Tray.interpolator();
            return trayStyles(props);
          },
          transitionSpec: {
            open: Transition.Specs.DefaultSpec,
            close: Transition.Specs.DefaultSpec,
          },
        }}
      />
      <BlankStack.Screen
        name="b"
        options={{
          screenStyleInterpolator: (props) => {
            "worklet";

            const trayStyles = Tray.interpolator();
            return trayStyles(props);
          },
          transitionSpec: {
            open: Transition.Specs.DefaultSpec,
            close: Transition.Specs.DefaultSpec,
          },
        }}
      />
    </BlankStack>
  );
}
