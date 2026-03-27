import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text, Alert } from "react-native";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  Easing,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useSiri } from "@/components/siri-overlay/context";
import { SiriProvider } from "@/components/siri-overlay";
import { useFocusEffect } from "expo-router";
import AnimatedInputBar from "@/components/animated-input-bar";
import ChromaRing from "@/components/chroma-ring";
import { SymbolView } from "expo-symbols";
import UnstableSiriOrb from "@/components/unstable_siri_orb";
import { useKeyboardHandler } from "@/utils/keyboard-handler";
import { PressableScale } from "pressto";

const PLACEHOLDERS: string[] = [
  "Share your thoughts...",
  "What's on your mind?",
  "Type something interesting...",
  "Express yourself here...",
];
const PADDING = 28;
const ListeningOverlay = ({ onDismiss }: { onDismiss: () => void }) => {
  const [text, setText] = useState<string>("");
  const keyboardHeight = useKeyboardHandler();

  const animatedInputStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: interpolate(keyboardHeight.value, [0, 350], [0, -250]) },
      ],
    };
  });

  return (
    <Animated.View
      style={styles.overlay}
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(200)}
    >
      <Animated.View
        entering={FadeInUp.duration(500).easing(Easing.out(Easing.exp))}
      >
        <UnstableSiriOrb
          size={300}
          speed={1}
          noiseIntensity={1}
          glowIntensity={1.4}
          saturation={2}
          style={{
            marginLeft: -Dimensions.get("screen").width / 2 + 1.5 * PADDING,
            marginTop: -Dimensions.get("screen").height / 2 + 6 * PADDING,
          }}
          brightness={1}
          rotationSpeed={1}
          noiseScale={3}
          coreIntensity={0.55}
          edgeSoftness={0.045}
          primaryColor={{ r: 0.45, g: 0.65, b: 1.0 }}
          secondaryColor={{ r: 0.0, g: 0.85, b: 0.8 }}
        />
      </Animated.View>

      <Animated.View
        entering={FadeInUp.delay(180)
          .duration(420)
          .easing(Easing.out(Easing.quad))}
      >
        <Text className="text-white text-2xl" style={{ fontFamily: "system" }}>
          Hi XYZ
        </Text>
        <Text className="text-white text-4xl" style={{ fontFamily: "system" }}>
          Where should we start ?
        </Text>
      </Animated.View>

      {/* 3. Input Transition: Rises from bottom with original styles */}
      <Animated.View
        style={[animatedInputStyle]}
        entering={FadeInUp.delay(340)
          .duration(480)
          .easing(Easing.out(Easing.exp))}
      >
        <ChromaRing
          glow="#000000"
          base="#000000"
          width={Dimensions.get("screen").width - 56}
          style={{ top: Dimensions.get("screen").height / 3.5 }}
          height={100}
          borderRadius={26}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 60,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#111",
              // Adjusted padding to balance input on left and button on right
              paddingLeft: 16,
              paddingRight: 8,
              borderRadius: 26,
              height: 96,
            }}
          >
            {/* 1. Input Bar moved to the beginning */}
            <AnimatedInputBar
              placeholders={PLACEHOLDERS}
              value={text}
              animationInterval={3000}
              onChangeText={setText}
              containerStyle={{
                width: Dimensions.get("screen").width - 150,
              }}
              selectionColor={"#353535"}
            />

            <View
              style={{
                width: 0.4,
                backgroundColor: "#6e6e6e",
                height: 50,
                // Adjusted margins for new position
                marginLeft: 10,
                marginRight: 10,
              }}
            />

            {/* 3. Send Button at the end */}
            <PressableScale
              onPress={() => {
                if (text.trim().length > 0) {
                  // Replace with your actual send logic
                  Alert.alert("Sending", text);
                  setText("");
                }
              }}
              // style={{ padding: 10 }} // Extra tap target area
            >
              <SymbolView
                // Changed name to paperplane for 'send' meaning
                name={{ ios: "paperplane.fill", android: "send", web: "send" }}
                tintColor={text.trim().length > 0 ? "#007AFF" : "#fff"} // Optional color change when text exists
                size={30}
              />
            </PressableScale>
          </View>
        </ChromaRing>
      </Animated.View>
    </Animated.View>
  );
};
export default function HomePage() {
  return (
    <SiriProvider>
      <Index />
    </SiriProvider>
  );
}

function Index() {
  const { toggle, isActive, setOverlay } = useSiri();

  const handleActivate = useCallback(() => {
    toggle({
      glow: {
        colors: ["#C44AFF", "#FF6B9D", "#00C9FF", "#5856D6", "#C44AFF"],
        speed: 0.18,
        saturation: 1,
        lightness: 0.65,
      },
      border: { radius: 50, spread: 22, margin: 5 },
      wave: { strength: 1, speed: 2.5, origin: [0.5, 0.8] },
    });
  }, [toggle]);

  const handleDismiss = useCallback(() => {
    setOverlay(null);
    toggle();
  }, [setOverlay, toggle]);

  const activateRef = useRef(handleActivate);
  const dismissRef = useRef(handleDismiss);
  useEffect(() => {
    activateRef.current = handleActivate;
  }, [handleActivate]);
  useEffect(() => {
    dismissRef.current = handleDismiss;
  }, [handleDismiss]);
  useEffect(() => {
    if (setOverlay) {
      if (isActive) {
        setOverlay(<ListeningOverlay onDismiss={handleDismiss} />);
      } else {
        setOverlay(null);
      }
    }
  }, [isActive, setOverlay, handleDismiss]);

  useFocusEffect(
    useCallback(() => {
      activateRef.current();
      return () => {
        dismissRef.current();
      };
    }, []),
  );

  // return <View style={styles.root} />;
  return (
    <View style={styles.root}>
      <ListeningOverlay onDismiss={handleDismiss} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
    paddingBottom: 48,
    paddingHorizontal: 28,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10000,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
