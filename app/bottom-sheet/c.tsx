import { router } from "expo-router";
import { Card } from "@/components/card-2";
import { Tray } from "@/components/tray";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, { CSSAnimationKeyframes } from "react-native-reanimated";
import { useState } from "react";
import { SheetButtons } from "@/components/sheet-buttons";
import { Image, Text } from "@expo/ui/swift-ui";
const GLOW_COLOR = "#6C63FF";

const glowIn: CSSAnimationKeyframes = {
  from: { boxShadow: `0 0 0 0 ${GLOW_COLOR}00` },
  to: { boxShadow: `0 0 32px 4px ${GLOW_COLOR}80` },
};

const glowOut: CSSAnimationKeyframes = {
  from: { boxShadow: `0 0 32px 4px ${GLOW_COLOR}59` },
  to: { boxShadow: `0 0 0 0 ${GLOW_COLOR}00` },
};

export default function Screen() {
  const [text, setText] = useState("");
  const hasText = text.length > 0;

  return (
    <Tray.View snapPoint="60%" backgroundColor="#FFF">
      <Tray.Header title="Screen C" />

      <Tray.Content>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.glow,
              {
                animationName: hasText ? glowIn : glowOut,
                animationDuration: hasText ? "400ms" : "500ms",
                animationFillMode: "forwards",
                animationTimingFunction: "ease-out",
              },
            ]}
          >
            <TextInput
              autoFocus
              value={text}
              onChangeText={setText}
              placeholder="Type something..."
              placeholderTextColor="#999"
              cursorColor={GLOW_COLOR}
              style={styles.input}
            />
          </Animated.View>
        </View>
        <View style={styles.container2}>
          <SheetButtons
            actions={[
              {
                buttonContent: (
                  <>
                    <Image systemName="plus" />
                    <Text>Collections</Text>
                  </>
                ),
                onClick: () => {
                  router.back();
                },
                isCancel: false,
              },
              {
                buttonContent: (
                  <>
                    <Image systemName="xmark" />
                    <Text>Cancel</Text>
                  </>
                ),
                onClick: () => {
                  router.back();
                },
                isCancel: true,
              },
            ]}
          />
        </View>
      </Tray.Content>
    </Tray.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 24,
    paddingHorizontal: 24,
  },
  glow: {
    borderRadius: 999,
  },
  container2: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  input: {
    color: "#1c1c1e",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#333",
  },
});
