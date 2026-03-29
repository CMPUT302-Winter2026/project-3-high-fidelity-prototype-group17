import React, { useMemo } from "react";
import { View } from "react-native";
import { Form, Host } from "@expo/ui/swift-ui";
import WordInfoSection from "@/components/word-info-section";
import ConjugationSection from "@/components/conjugation-section";
import DescriptionSection from "@/components/description-section";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { usePersistentAppStore } from "@/store/global-persistent";

export default function LessonPlanIndex() {
  const { t } = useTranslation();
  const { collections } = usePersistentAppStore();

  // Ensure the param name matches your router (collectionsId)
  const { collectionsId } = useLocalSearchParams<{
    collectionsId: string;
  }>();

  // 1. Find the specific collection and its saved nodes
  const targetCollection = useMemo(() => {
    return collections.find((c) => c.id === collectionsId);
  }, [collections, collectionsId]);

  if (!targetCollection) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <Host style={{ flex: 1 }}>
        <Form>
          {/* 2. Map through the nodes SAVED in this collection */}
          {targetCollection.nodes.map((node) => (
            <React.Fragment key={node.id}>
              {/* Native Word Info */}
              <WordInfoSection id={node.id} />

              {/* 3. Pass the saved description string from the store */}
              {node.description ? (
                <DescriptionSection text={node.description} />
              ) : null}

              {/* Native Conjugation Table */}
              <ConjugationSection
                id={node.id}
                sectionname={`${t(node.nls_key)} - Word conjugation ᴬᴱᶜᴰ`}
              />
            </React.Fragment>
          ))}
        </Form>
      </Host>
    </View>
  );
}
