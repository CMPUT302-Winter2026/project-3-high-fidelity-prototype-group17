import { router } from "expo-router";
import { PressableScale } from "pressto";
import { Button, Text, View } from "react-native";

export default function B() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>In swerving/nested/index</Text>
      <PressableScale onPress={() => router.push("/swerving/nested/b")}>
        <Button title="Or go to B" />
      </PressableScale>
      <PressableScale onPress={router.back}>
        <Button title="Go back" />
      </PressableScale>
    </View>
  );
}
