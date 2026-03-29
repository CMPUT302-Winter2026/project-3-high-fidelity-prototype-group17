import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlassContainer, GlassView } from "expo-glass-effect";
import { Image } from "expo-image";

const LiquidCollectionCard = ({
  name,
  numNodes,
  images,
  notifications,
}: {
  name: string;
  numNodes: number;
  images: string[];
  notifications?: boolean;
}) => {
  return (
    <View style={{ flex: 1, position: "relative", maxWidth: 200 }}>
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
        {images.length >= 2 && (
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
            source={{ uri: images[0] }}
          />
        )}

        {/* Far Right Image */}
        {images.length >= 3 && (
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
            source={{ uri: images[1] }}
          />
        )}

        {/* Inner Left Image */}
        {images.length >= 4 && (
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
            source={{ uri: images[2] }}
          />
        )}

        {images.length >= 5 && (
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
            source={{ uri: images[3] }}
          />
        )}

        {/* Inner Right Image */}

        {/* Center Main Image */}
        {images.length >= 1 && (
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
            source={{ uri: images[images.length - 1] }}
          />
        )}
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
            numberOfLines={1}
          >
            {name}
          </Text>
          <View className="px-4 py-2 bg-gray-100 rounded-xl mt-1">
            <Text className="text-gray-500">{numNodes} Nodes</Text>
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
