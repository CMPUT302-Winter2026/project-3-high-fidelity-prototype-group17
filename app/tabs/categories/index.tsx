import { Link, router } from "expo-router";
import { memo } from "react";
import { FlatList } from "react-native-gesture-handler";

import LiquidCategoryCard from "@/components/liquid-category-card";
import { PressableScale } from "pressto";
import Page from "@/components/page";

const Images = memo(() => {
  const data = [
    {
      id: "1",
      source: "https://picsum.photos/id/63/3000/2000",
      placeholder: "LwLSuiW;i_S2|xS2SLWp#TS2XRoL",
    },
    {
      id: "2",
      source: "https://picsum.photos/id/429/3000/2000",
      placeholder: "LRLNPtrV_MDOml.8.SDiM_kCRO%#",
    },
    {
      id: "3",
      source: "https://picsum.photos/id/326/3000/2000",
      placeholder:
        "|NDJ;PfQ~qofayj[fQj[fQf6ayfQfQj[fQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "4",
      source: "https://picsum.photos/id/431/3000/2000",
      placeholder:
        "|NECwTfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "5",
      source: "https://picsum.photos/id/493/3000/2000",
      placeholder:
        "|MFF%?fQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "6",
      source: "https://picsum.photos/id/766/3000/2000",
      placeholder:
        "|MHBXpfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "6",
      source: "https://picsum.photos/id/766/3000/2000",
      placeholder:
        "|MHBXpfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "6",
      source: "https://picsum.photos/id/766/3000/2000",
      placeholder:
        "|MHBXpfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "6",
      source: "https://picsum.photos/id/766/3000/2000",
      placeholder:
        "|MHBXpfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
    {
      id: "6",
      source: "https://picsum.photos/id/766/3000/2000",
      placeholder:
        "|MHBXpfQ~qj[ofj[fQj[fQf6ayfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ",
    },
  ];

  return (
    <FlatList
      data={data}
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
        const id = `shared-image-${item.id}`;
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
                  image: item.source,
                  placeholder: item.placeholder,
                },
              });
            }}
          >
            <LiquidCategoryCard numImages={5} />
          </PressableScale>
        );
      }}
    />
  );
});

export default function StyleId() {
  return <Images />;
}
