import AnimatedInputBar from "@/components/animated-input-bar";
import { Link, router } from "expo-router";
import { memo, useState } from "react";
import { Dimensions, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const PLACEHOLDERS: string[] = [
  "Share your thoughts...",
  "What's on your mind?",
  "Type something interesting...",
  "Express yourself here...",
];

export default function KonAiHome() {
  const [text, setText] = useState<string>("");

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          width: Dimensions.get("window").width - 60,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#111",
          paddingHorizontal: 16,
          borderRadius: 26,
          height: 56,
        }}
      >
        <View
          style={{
            width: 0.4,
            backgroundColor: "#6e6e6e",
            height: 18,
            marginLeft: 18,
          }}
        />
        <AnimatedInputBar
          placeholders={PLACEHOLDERS}
          value={text}
          animationInterval={900}
          onChangeText={setText}
          selectionColor={"#353535"}
        />
      </View>
    </View>
  );
}
