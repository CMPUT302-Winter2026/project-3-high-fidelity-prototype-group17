import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlassContainer, GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";

const LiquidCollectionCard = ({
  numImages,
  notifications,
}: {
  numImages: number;
  notifications?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 24,
          alignItems: "center",
          zIndex: -5,
        }}
      >
        {/* Far Left Image */}
        <Image
          style={{
            width: 60,
            height: 80,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: "white",
            position: "absolute",
            zIndex: 1,
            transformOrigin: "bottom",
            transform: [{ rotate: "-15deg" }, { translateX: -50 }],
          }}
          source={{
            uri: "https://picsum.photos/seed/696/3000/2000",
          }}
        />

        {/* Far Right Image */}
        <Image
          style={{
            width: 60,
            height: 80,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: "white",
            position: "absolute",
            zIndex: 1,
            transformOrigin: "bottom",
            transform: [{ rotate: "15deg" }, { translateX: 50 }],
          }}
          source={{
            uri: "https://picsum.photos/seed/800/3000/2000",
          }}
        />

        {/* Inner Left Image */}
        <Image
          style={{
            width: 60,
            height: 80,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: "white",
            position: "absolute",
            zIndex: 2,
            transformOrigin: "bottom",
            transform: [{ rotate: "-5deg" }, { translateX: -25 }],
          }}
          source={{
            uri: "https://picsum.photos/seed/100/3000/2000",
          }}
        />

        {/* Inner Right Image */}
        <Image
          style={{
            width: 60,
            height: 80,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: "white",
            position: "absolute",
            zIndex: 2,
            transformOrigin: "bottom",
            transform: [{ rotate: "5deg" }, { translateX: 25 }],
          }}
          source={{
            uri: "https://picsum.photos/seed/500/3000/2000",
          }}
        />

        {/* Center Main Image */}
        <Image
          style={{
            width: 60,
            height: 100,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: "white",
            position: "absolute",
            zIndex: 3,
            transformOrigin: "bottom",
            transform: [{ rotate: "0deg" }, { translateY: -2 }],
          }}
          source={{
            uri: "https://picsum.photos/seed/600/3000/2000",
          }}
        />
      </View>

      {/* Foreground Glass Overlay */}
      <GlassContainer>
        <GlassView
          className="flex items-center justify-center"
          isInteractive
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            width: "100%",
            zIndex: 2,
            height: 80,
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            className="font-light text-xl"
            style={{ fontFamily: "Times New Roman" }}
          >
            {t("animals")}
          </Text>
          <View className="px-4 py-2 bg-gray-100 rounded-xl">
            <Text className="text-gray-500">{numImages} Nodes</Text>
          </View>
        </GlassView>
        {notifications && (
          <GlassView
            style={{
              borderRadius: 100,
              width: 16,
              height: 16,
              position: "absolute",
              top: 60,
              right: -4,
              backgroundColor: "red",
              zIndex: 10,
            }}
            isInteractive
          ></GlassView>
        )}
      </GlassContainer>
    </View>
  );
};

export default LiquidCollectionCard;
