import Transition from "react-native-screen-transitions";
import { Stack } from "@/layouts/stack";

export default function PresetsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="elastic-card"
        options={{
          title: "Elastic Card",
          ...Transition.Presets.ElasticCard(),
        }}
      />
    </Stack>
  );
}
