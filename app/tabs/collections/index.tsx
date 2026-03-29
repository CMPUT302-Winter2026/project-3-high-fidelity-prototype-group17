import { router } from "expo-router";
import { memo } from "react";
import { FlatList } from "react-native";

import { PressableScale } from "pressto";
import LiquidCollectionCard from "@/components/liquid-collection-card";
import { usePersistentAppStore } from "@/store/global-persistent";
import { ContentUnavailableView, Host } from "@expo/ui/swift-ui";
import { View } from "react-native";

const Images = memo(() => {
  const collections = usePersistentAppStore((state) => state.collections);
  if (collections.length > 0) {
    return (
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        style={{ flex: 1, backgroundColor: "transparent" }}
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingVertical: 12,
          paddingHorizontal: 12,
          gap: 12,
          backgroundColor: "transparent",
        }}
        renderItem={({ item }) => {
          const nodeImages = item.nodes
            .map((node) => node.images)
            .filter(Boolean)
            .slice(0, 5);

          return (
            <PressableScale
              onLongPress={() =>
                router.push({
                  pathname: "/delete-warning",
                  params: {
                    id: item.id,
                  },
                })
              }
              style={{
                flex: 1,
                aspectRatio: 1,
              }}
              onPress={() => {
                router.push({
                  pathname: "/tabs/collections/[id]",
                  params: {
                    id: item.id,
                  },
                });
              }}
            >
              {/* 3. Pass the dynamic data to your card */}
              <LiquidCollectionCard
                name={item.name}
                numNodes={item.nodes.length}
                images={nodeImages}
              />
            </PressableScale>
          );
        }}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Host style={{ flex: 1 }}>
        <ContentUnavailableView
          title="No Collections"
          systemImage="folder.badge.questionmark"
          description="Create a new collection to start organizing your nodes and images."
        />
      </Host>
    </View>
  );
});

export default function StyleId() {
  return <Images />;
}
