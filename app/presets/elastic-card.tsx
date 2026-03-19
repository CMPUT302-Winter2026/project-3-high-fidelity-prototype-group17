import { StyleSheet, Text, View } from "react-native";
import Page from "@/components/page";
import { PressableScale } from "pressto";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

export default function ElasticCardPreset() {
  return (
    <Page
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0,
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Elastic Card</Text>

          <PressableScale
            onPress={router.back}
            style={{
              width: 30,
              height: 30,
              top: -24,
              right: -24,
              position: "absolute",
              borderRadius: 50,
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="xmark" size={18} color="#a3a3a3" />
          </PressableScale>

          <Text style={styles.description}>
            This preset creates a rubber-band-like elastic movement with overlay
            effects and customizable elasticity. Drag me around.
          </Text>
        </View>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 36,
    gap: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 36,
  },
  header: {
    gap: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "gray",
    fontWeight: "400",
    textAlign: "center",
  },
});
