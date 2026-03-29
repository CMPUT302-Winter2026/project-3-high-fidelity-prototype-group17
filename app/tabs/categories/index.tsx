import { Link, router } from "expo-router";
import { memo, useMemo } from "react";
// 1. IMPORT FROM REACT NATIVE, NOT GESTURE HANDLER
import { FlatList, View } from "react-native";

import LiquidCategoryCard from "@/components/liquid-category-card";
import { PressableScale } from "pressto";
import Page from "@/components/page";
import { usePersistentAppStore } from "@/store/global-persistent";
import SkiaGraph from "@/components/skia-graph";
import { RAW_NODES, ROOT_IDS } from "@/utils/data";
import keyBy from "@/utils/keyBy";
import { useTranslation } from "react-i18next";

const Images = memo(() => {
  const keyMap = keyBy(RAW_NODES, "id");
  const { t } = useTranslation();

  const { sortMode, lastOpenedIds, markCategoryOpened } =
    usePersistentAppStore();
  const sortedIds = useMemo(() => {
    if (sortMode === "alphabetical") {
      return [...ROOT_IDS].sort((a, b) =>
        t(keyMap[a]?.nls_key ?? "").localeCompare(t(keyMap[b]?.nls_key ?? "")),
      );
    }
    const openedSet = new Set(lastOpenedIds);
    const opened = lastOpenedIds.filter((id) => ROOT_IDS.includes(id));
    const unopened = ROOT_IDS.filter((id) => !openedSet.has(id));
    return [...opened, ...unopened];
  }, [sortMode, lastOpenedIds, t]);
  return (
    <FlatList
      data={sortedIds}
      keyExtractor={(_, idx) => String(idx)}
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
        const data = keyMap[item];
        const id = data.id;
        return (
          <PressableScale
            style={{
              flex: 1,
              aspectRatio: 1,
            }}
            onPress={() => {
              markCategoryOpened(id);
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
  if (mode === "expert") return <SkiaGraph id="none" />;
  return <Images />;
}
