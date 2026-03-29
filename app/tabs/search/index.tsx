import React, { useState, useMemo } from "react";
import { Stack, router } from "expo-router"; // Added router
import { useTranslation } from "react-i18next";
import { RAW_NODES, ROOT_IDS } from "@/utils/data";
import {
  Host,
  List,
  Section,
  Text,
  HStack,
  VStack,
  Spacer,
  Button,
} from "@expo/ui/swift-ui";
import {
  listStyle,
  font,
  foregroundStyle,
  buttonStyle,
  labelStyle,
  controlSize,
  disabled,
} from "@expo/ui/swift-ui/modifiers";
import { usePersistentAppStore } from "@/store/global-persistent";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { useColorScheme } from "react-native";

const findCategoryRoot = (nodeId: string) => {
  // If the node IS a root, return it immediately
  if (ROOT_IDS.includes(nodeId)) return nodeId;

  // Create a map to look up parents: ChildID -> ParentID
  const parentMap = new Map<string, string>();
  RAW_NODES.forEach((node) => {
    node.children?.forEach((childId) => {
      parentMap.set(childId, node.id);
    });
  });

  let currentId = nodeId;
  // Climb up the tree until we find one of our ROOT_IDS
  while (currentId && !ROOT_IDS.includes(currentId)) {
    const parentId = parentMap.get(currentId);
    if (!parentId) break; // Safety break if tree is disconnected
    currentId = parentId;
  }

  return currentId || nodeId; // Fallback to itself if no root found
};
export default function SearchIndex() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const { collections } = usePersistentAppStore(); // Get collections from store

  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";

  const filteredNodes = useMemo(() => {
    if (!searchQuery) return RAW_NODES;

    return RAW_NODES.filter((node) => {
      const creeWord = t(node.nls_key).toLowerCase();
      const meaning = node.sentences?.[0]?.setence?.toLowerCase() || "";
      const query = searchQuery.toLowerCase();

      return creeWord.includes(query) || meaning.includes(query);
    });
  }, [searchQuery, t]);

  return (
    <Host style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "Search",
          headerSearchBarOptions: {
            placement: "automatic",
            placeholder: "Search words or meanings...",
            onChangeText: (event) => setSearchQuery(event.nativeEvent.text),
          },
        }}
      />

      <List modifiers={[listStyle("insetGrouped")]}>
        <Section title={searchQuery ? "Search Results" : "All Words"}>
          {filteredNodes.map((node) => {
            const creeWord = t(node.nls_key);
            const meaning =
              node.sentences?.[0]?.setence || "No meaning available";

            // 1. Find if this node is in ANY collection
            const parentCollection = collections.find((col) =>
              col.nodes.some((n) => n.id === node.id),
            );

            return (
              <HStack key={node.id} alignment="center">
                <VStack alignment="leading" spacing={4}>
                  <Text modifiers={[font({ size: 18, weight: "semibold" })]}>
                    {creeWord}
                  </Text>
                  <Text
                    modifiers={[font({ size: 14 }), foregroundStyle("#8E8E93")]}
                  >
                    {meaning}
                  </Text>
                </VStack>

                <Spacer />

                <HStack spacing={16}>
                  {/* CATEGORY BUTTON */}
                  <Button
                    systemImage="folder.fill"
                    label="Category"
                    modifiers={[
                      labelStyle("iconOnly"),
                      controlSize("regular"),
                      buttonStyle("glass"),
                    ]}
                    onPress={() => {
                      const rootId = findCategoryRoot(node.id);
                      router.push({
                        pathname: "/tabs/categories/[id]",
                        params: { id: rootId },
                      });
                    }}
                  />

                  {/* COLLECTION BUTTON */}
                  <Button
                    systemImage={
                      parentCollection ? "bookmark.fill" : "bookmark"
                    }
                    label="Collection"
                    // 2. Disable button if no parent collection is found
                    modifiers={[
                      labelStyle("iconOnly"),
                      controlSize("regular"),
                      buttonStyle("glassProminent"),
                      disabled(!parentCollection),
                    ]}
                    onPress={() => {
                      if (parentCollection) {
                        router.push({
                          pathname: "/tabs/collections/[id]",
                          params: { id: parentCollection.id },
                        });
                      }
                    }}
                  />
                </HStack>
              </HStack>
            );
          })}
        </Section>
      </List>
    </Host>
  );
}
