import { Link, router } from "expo-router";
import { memo } from "react";
import { FlatList } from "react-native-gesture-handler";

import LiquidCategoryCard from "@/components/liquid-category-card";
import { PressableScale } from "pressto";
import Page from "@/components/page";
import { usePersistentAppStore } from "@/store/global-persistent";
import SkiaGraph from "@/components/skia-graph";
import { RAW_NODES, ROOT_IDS } from "@/utils/data";
import keyBy from "@/utils/keyBy";

const Images = memo(() => {
  const keyMap = keyBy(RAW_NODES, "id");

  return (
    <FlatList
      data={ROOT_IDS}
      keyExtractor={(_, idx) => String(idx)}
      numColumns={2}
      columnWrapperStyle={{ gap: 12 }}
      style={{ flex: 1, backgroundColor: "transparent" }}
      scrollEnabled={true}
      contentContainerStyle={{
        paddingVertical: 12,
        paddingHorizontal: 12,
        gap: 12,
        backgroundColor: "transparent",
      }}
      renderItem={({ item }) => {
        const data = keyMap[item];
        const id = data.id;
        return (
          <PressableScale
            style={{
              flex: 1,
              aspectRatio: 1,
              // borderRadius: 24,
              // overflow: "visible",
              // backgroundColor: "#eee",
            }}
            onPress={() => {
              router.push({
                pathname: "/tabs/categories/[id]",
                params: {
                  id,
                  image: data.images,
                  placeholder: data.nls_key,
                },
              });
            }}
          >
            <LiquidCategoryCard id={id} />
          </PressableScale>
        );
      }}
    />
  );
});

export default function StyleId() {
  const { mode } = usePersistentAppStore();
  if (mode === "expert") return <SkiaGraph />;
  return <Images />;
}
