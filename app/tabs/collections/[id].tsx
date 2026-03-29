import SkiaGraph from "@/components/skia-graph";
import { useLocalSearchParams, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { useWindowDimensions, View } from "react-native";
import { usePersistentAppStore } from "@/store/global-persistent";

export default function ImageDetail() {
  const { id } = useLocalSearchParams<{
    id: string;
    image: string;
    placeholder: string;
  }>();

  const { markCollectionOpened, mode, collections } = usePersistentAppStore();

  const collection = collections.find((c) => c.id === id);
  const hasNewNodes = collection
    ? (collection.lastUpdated ?? 0) > (collection.lastOpenedAt ?? 0)
    : false;

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (id) markCollectionOpened(id);
      };
    }, [id]),
  );

  return (
    <View className="flex-1">
      <SkiaGraph id="" newNode={hasNewNodes} collectionId={id} />
    </View>
  );
}
