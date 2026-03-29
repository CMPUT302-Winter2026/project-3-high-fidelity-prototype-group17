import { Text, View } from "react-native";
import React, { useMemo } from "react";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { RAW_NODES } from "@/utils/data";
import keyBy from "@/utils/keyBy";

const LiquidCategoryCard = ({ id }: { id: string }) => {
  const { t } = useTranslation();

  const { rootData, childImages, nodesCount } = useMemo(() => {
    const keyMap = keyBy(RAW_NODES, "id");
    const root = keyMap[id];

    // Traverse the full tree to count ALL descendant nodes
    // and collect images from across the whole tree
    const allDescendantIds: string[] = [];
    const queue = [...(root?.children || [])];

    while (queue.length > 0) {
      const currentId = queue.shift()!;
      allDescendantIds.push(currentId);
      const currentNode = keyMap[currentId];
      if (currentNode?.children?.length) {
        queue.push(...currentNode.children);
      }
    }

    // Collect images from descendants (up to 5), falling back to root image
    const images = allDescendantIds
      .slice(0, 5)
      .map((childId) => keyMap[childId]?.images)
      .filter(Boolean);

    return {
      rootData: root,
      childImages: images,
      nodesCount: allDescendantIds.length, // full descendant count
    };
  }, [id]);

  if (!rootData) return null;

  const getImg = (index: number) => childImages[index] || rootData.images;

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* Background Folder Shapes - EXACT ORIGINALS */}
      <View className="bg-gray-300 rounded-tr-2xl rounded-tl-2xl w-1/2 h-5 absolute left-0 top-1 -z-10" />
      <View className="bg-gray-300 rounded-tr-2xl rounded-b-3xl w-full h-31 absolute left-0 top-4 -z-10" />

      {/* Image Stack Container - EXACT ORIGINALS */}
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
          source={getImg(0)}
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
          source={getImg(1)}
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
          source={getImg(2)}
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
          source={getImg(3)}
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
          source={getImg(4)}
        />
      </View>

      {/* Foreground Glass Overlay - EXACT ORIGINALS */}
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
          className="font-light text-xl"
          style={{ fontFamily: "Times New Roman" }}
        >
          {t(rootData.nls_key)}
        </Text>
        <View className="px-4 py-2 bg-gray-100 rounded-xl">
          <Text className="text-gray-500">{nodesCount + 1} Nodes</Text>
        </View>
      </GlassView>
    </View>
  );
};

export default LiquidCategoryCard;
