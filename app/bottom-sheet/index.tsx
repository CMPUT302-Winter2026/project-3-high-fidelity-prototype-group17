import { router, useLocalSearchParams, usePathname } from "expo-router";
import { Tray } from "@/components/tray";

import {
  Button,
  Form,
  Host,
  HStack,
  Spacer,
  Text,
  Image,
  Section,
  VStack,
} from "@expo/ui/swift-ui";
import {
  background,
  buttonStyle,
  controlSize,
  foregroundStyle,
  frame,
  labelStyle,
  padding,
  shapes,
  tint,
} from "@expo/ui/swift-ui/modifiers";
import React from "react";
import ConjugationSection from "@/components/conjugation-section";
import WordInfoSection from "@/components/word-info-section";
import { SheetButtons } from "@/components/sheet-buttons";
import { Alert, View } from "react-native";
import { usePersistentAppStore } from "@/store/global-persistent";
import { RAW_NODES } from "@/utils/data";
import { useTranslation } from "react-i18next";
export default function Screen() {
  const { mode, addNodeToGraph, customNodes, removeNodeFromGraph } =
    usePersistentAppStore();
  const { id, hideNext } = useLocalSearchParams<{
    id: string;
    hideNext: string;
  }>();
  const data =
    RAW_NODES.find((e) => e.id === id) ?? customNodes.find((e) => e.id === id);

  const { t } = useTranslation();
  return (
    <Tray.View snapPoint="70%" backgroundColor="#FFF">
      <Tray.Header title="Word information" />
      <Tray.Content
        style={{
          justifyContent: "space-between",
          paddingBottom: 24,
          backgroundColor: "#f1f1f1",
        }}
      >
        <Host style={{ flex: 1 }}>
          <Form>
            <WordInfoSection id={id} />

            {mode === "expert" && hideNext === "false" ? (
              <>
                <Section title="Add Node">
                  <VStack spacing={12}>
                    <Button
                      onPress={() => {
                        Alert.prompt(
                          "Add Related Word",
                          `Enter the name for the new word connected to ${t(data?.nls_key || "")}`,
                          [
                            {
                              text: "Cancel",
                              style: "cancel",
                            },
                            {
                              text: "Add",
                              onPress: (wordName: string | undefined) => {
                                if (
                                  wordName &&
                                  wordName.trim().length > 0 &&
                                  data
                                ) {
                                  addNodeToGraph(id, {
                                    nls_key: wordName.trim(),
                                  });
                                }
                              },
                            },
                          ],
                          "plain-text",
                        );
                      }}
                      label={`Connect a new node to ${t(data?.nls_key || "")}`}
                      systemImage="plus"
                    />
                  </VStack>
                </Section>
                {data?.id.includes("custom") && (
                  <Section title="Delete Node">
                    <VStack spacing={12}>
                      <Button
                        modifiers={[
                          foregroundStyle({ color: "red", type: "color" }),
                        ]}
                        onPress={() => {
                          Alert.alert(
                            "Delete Node",
                            `Are you sure you want to delete "${t(data?.nls_key || "")}" from the graph?`,
                            [
                              { text: "Cancel", style: "cancel" },
                              {
                                text: "Delete",
                                style: "destructive",
                                onPress: () => {
                                  if (data) {
                                    removeNodeFromGraph(data.id);
                                    router.back();
                                  }
                                },
                              },
                            ],
                          );
                        }}
                        label={`Delete node - ${t(data?.nls_key || "")} from the graph`}
                        systemImage="trash"
                        role="destructive"
                      />
                    </VStack>
                  </Section>
                )}
              </>
            ) : (
              <></>
            )}
            <ConjugationSection id={id} />
          </Form>
        </Host>
        {mode !== "learner" && hideNext === "false" && (
          <View style={{ paddingHorizontal: 24 }}>
            <SheetButtons
              actions={[
                {
                  buttonContent: (
                    <>
                      <Text>Collect word</Text>
                    </>
                  ),
                  onClick: () => {
                    router.push({
                      pathname: "/bottom-sheet/b",
                      params: {
                        id: id,
                      },
                    });
                  },
                  isCancel: false,
                },
                {
                  buttonContent: (
                    <>
                      <Image systemName="xmark" />
                      <Text>Back</Text>
                    </>
                  ),
                  onClick: () => {
                    router.back();
                  },
                  isCancel: true,
                },
              ]}
            />
          </View>
        )}
      </Tray.Content>
    </Tray.View>
  );
}
