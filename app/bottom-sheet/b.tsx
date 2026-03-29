import { router, useLocalSearchParams } from "expo-router";
import { Tray } from "@/components/tray";
import { Alert, View } from "react-native";
import { SheetButtons } from "@/components/sheet-buttons";
import { Form, Host, Image, Text } from "@expo/ui/swift-ui";
import ColectionSection from "@/components/collection-section";
import { usePersistentAppStore } from "@/store/global-persistent";
import { useState } from "react";
import { RAW_NODES } from "@/utils/data";
import { useTranslation } from "react-i18next";
import { font } from "@expo/ui/swift-ui/modifiers";

export default function Screen() {
  const { collections, addNodeToCollection } = usePersistentAppStore();
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const [description, setDescription] = useState("");
  const [collectionid, setCollectionId] = useState("");

  const node = RAW_NODES.find((e) => e.id === id);

  const nodeWithDesc = node ? { ...node, description } : null;
  const { t } = useTranslation();

  const selectedCollection = collections.find((c) => c.id === collectionid);

  const isDuplicate = selectedCollection?.nodes.some((n) => n.id === id);

  const isButtonDisabled =
    !collectionid || collections.length === 0 || isDuplicate;
  return (
    <Tray.View snapPoint="50%" backgroundColor="#FFF">
      <Tray.Header title="Collections" />
      <Tray.Content>
        <View style={{ flex: 1 }}>
          <Host style={{ flex: 1 }}>
            <Form>
              <ColectionSection
                id={id}
                collectionId={collectionid} // Added this prop
                setCollectionId={setCollectionId}
                setDescription={setDescription}
                description={description}
              />
            </Form>
          </Host>
        </View>
        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 24,
            backgroundColor: "#f1f1f1",
          }}
        >
          <SheetButtons
            actions={[
              {
                isDisabled: isButtonDisabled,
                buttonContent: (
                  <>
                    <Image systemName="checkmark" />
                    <Text
                      modifiers={[
                        font({
                          size: isDuplicate ? 12 : 16,
                          weight: "medium",
                        }),
                      ]}
                    >
                      {isDuplicate ? "Duplicate Node" : "Done"}
                    </Text>
                  </>
                ),
                onClick: () => {
                  if (nodeWithDesc && collectionid) {
                    const targetCollection = collections.find(
                      (e) => e.id === collectionid,
                    );
                    const collectionName =
                      targetCollection?.name || "Collection";
                    const nodeName = t(node?.nls_key || "");
                    addNodeToCollection(collectionid, nodeWithDesc as any);
                    Alert.alert(
                      "Success",
                      `Added ${nodeName} to ${collectionName}`,
                      [
                        {
                          text: "OK",
                          onPress: () => {
                            router.back();
                          },
                        },
                      ],
                    );
                  }
                },
                isCancel: false,
              },
              {
                buttonContent: (
                  <>
                    <Image systemName="arrow.left" />
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
      </Tray.Content>
    </Tray.View>
  );
}
