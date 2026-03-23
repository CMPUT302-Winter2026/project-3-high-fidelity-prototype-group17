import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";

const LiquidCategoryCard = ({ numImages }: { numImages: number }) => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <GlassView
        className="flex items-center justify-center"
        isInteractive
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          width: "100%",
          height: 80,
          borderRadius: 24,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          className="font-light  text-xl "
          style={{ fontFamily: "Times New Roman" }}
        >
          Animal
        </Text>
        <View className="px-4 py-2  bg-gray-100 rounded-xl">
          <Text className="text-gray-500">10 Nodes </Text>
        </View>
      </GlassView>
      <View className="bg-gray-300 rounded-tr-2xl rounded-tl-2xl w-1/2 h-5 absolute left-0 top-1 -z-10" />
      <View className="bg-gray-300 rounded-tr-2xl rounded-b-3xl w-full h-31 absolute left-0 top-4 -z-10" />

      <Image
        style={{
          width: 60,
          height: 80,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: "white",
          zIndex: -1,
          transform: [{ rotate: "15deg" }],
          position: "absolute",
          top: 30,
          left: 10,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        source={{
          uri: "https://picsum.photos/seed/696/3000/2000",
        }}
      />

      <Image
        style={{
          width: 60,
          height: 80,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: "white",
          zIndex: -1,
          transform: [{ rotate: "-5deg" }],
          position: "absolute",
          top: 30,
          left: 10 + 40,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        source={{
          uri: "https://picsum.photos/seed/800/3000/2000",
        }}
      />

      <Image
        style={{
          width: 60,
          height: 80,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: "white",
          zIndex: -1,
          transform: [{ rotate: "2deg" }],
          position: "absolute",
          top: 30,
          left: 10 + 2 * 30,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        source={{
          uri: "https://picsum.photos/seed/100/3000/2000",
        }}
      />

      <Image
        style={{
          width: 60,
          height: 80,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: "white",
          zIndex: -1,
          transform: [{ rotate: "0deg" }],
          position: "absolute",
          top: 30,
          left: 0 + 3 * 29,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        source={{
          uri: "https://picsum.photos/seed/500/3000/2000",
        }}
      />

      {/* <Image
        style={{
          width: 80,
          borderWidth: 2,
          borderRadius: 16,
          borderColor: "white",
          height: 100,
          zIndex: -1,
          transform: [{ rotate: "-10deg" }],
          position: "absolute",
         top: 30,
          left: 5 + 4 * 30,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        source={{
          uri: "https://picsum.photos/seed/600/3000/2000",
        }}
      /> */}
    </View>
  );
};

export default LiquidCategoryCard;

const styles = StyleSheet.create({});
