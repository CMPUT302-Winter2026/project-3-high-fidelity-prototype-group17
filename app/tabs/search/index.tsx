import React, { useState, useMemo } from "react";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { RAW_NODES } from "@/utils/data";
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
} from "@expo/ui/swift-ui/modifiers";
import { usePersistentAppStore } from "@/store/global-persistent";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { useColorScheme } from "react-native";

export default function SearchIndex() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";

  const { setLng, lng, mode, setMode } = usePersistentAppStore();
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
                  <Button
                    systemImage="folder.fill"
                    label="Category"
                    modifiers={[
                      labelStyle("iconOnly"),
                      controlSize("regular"),
                      buttonStyle("glass"),
                    ]}
                    onPress={() => console.log("Show Category: ", node.id)}
                  />
                  <Button
                    systemImage="bookmark.fill"
                    label="Collection"
                    modifiers={[
                      labelStyle("iconOnly"),
                      controlSize("regular"),
                      buttonStyle("glassProminent"),
                    ]}
                    onPress={() => console.log("Show Collection: ", node.id)}
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
