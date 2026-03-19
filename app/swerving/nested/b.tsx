import { router } from "expo-router";
import { PressableScale } from "pressto";
import { Button, Text, View } from "react-native";

export default function B() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>In swerving/nested/b</Text>
      <PressableScale onPress={router.back}>
        <Button title="Go back" />
      </PressableScale>
    </View>
  );
}
