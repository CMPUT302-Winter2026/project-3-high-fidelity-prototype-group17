import { router } from "expo-router";
import { Card } from "@/components/card-2";
import { Tray } from "@/components/tray";
import { StyleSheet, Text, View } from "react-native";
import { PressableScale } from "pressto";

export default function Screen() {
  return (
    <Tray.View snapPoint="50%" backgroundColor="#FFF">
      <Tray.Header title="Screen A" />
      <Tray.Content
        style={{ justifyContent: "space-between", paddingBottom: 24 }}
      >
        <View style={{ gap: 4 }}>
          <Card
            title="Go to swerving/nested"
            description="This will take us to a full screen flow."
            variant="success"
            onPress={() => router.navigate("/swerving/nested")}
          />
          <Card
            title="Or go back"
            description="I would rather go back"
            variant="error"
            onPress={router.back}
          />
        </View>
        <PurchaseButtons />
      </Tray.Content>
    </Tray.View>
  );
}

function PurchaseButtons() {
  return (
    <View style={styles.purchaseRow}>
      <PressableScale
        style={styles.primaryButton}
        onPress={() => router.navigate("/presets/elastic-card")}
      >
        <Text style={styles.primaryButtonText}>Create</Text>
      </PressableScale>
      <PressableScale
        style={styles.secondaryButton}
        onPress={() => router.back}
      >
        <Text style={styles.secondaryButtonText}>Cancel</Text>
      </PressableScale>
    </View>
  );
}
const styles = StyleSheet.create({
  primaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: "black",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  secondaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: "#84cc16",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  purchaseRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
