import { usePersistentAppStore } from "@/store/global-persistent";
import {
  Button,
  HStack,
  LabeledContent,
  Rectangle,
  ScrollView,
  Section,
  Text,
  TextField,
  VStack,
  ZStack,
} from "@expo/ui/swift-ui";
import {
  background,
  buttonStyle,
  controlSize,
  cornerRadius,
  font,
  foregroundStyle,
  frame,
  glassEffect,
  labelStyle,
  offset,
  padding,
  rotationEffect,
  shadow,
  shapes,
} from "@expo/ui/swift-ui/modifiers";
import React, { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";

const COLORS = ["#3b4b8a", "#2ecc71", "#e74c3c", "#8e44ad"];

function NativeCategoryCard({
  category,
  isSelected,
  onSelect,
}: {
  category: { id: string; name: string; count: number; color: string };
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <Button onPress={onSelect} modifiers={[buttonStyle("plain")]}>
      <VStack
        modifiers={[
          padding({ all: 1 }),
          background(
            isSelected ? "#007AFF" : "transparent",
            shapes.roundedRectangle({ cornerRadius: 28 }),
          ),
        ]}
      >
        <ZStack
          alignment="bottom"
          modifiers={[
            frame({ width: 200, height: 140 }),
            offset({ y: 20 }),
            background(
              isSelected ? "#f1f1f1" : "transparent",
              shapes.roundedRectangle({ cornerRadius: 28 }),
            ),
          ]}
        >
          <ZStack alignment="center" modifiers={[offset({ y: -50 })]}>
            <Rectangle
              modifiers={[
                frame({ width: 60, height: 80 }),
                cornerRadius(12),
                foregroundStyle(category.color),
                rotationEffect(-15),
                offset({ x: -40, y: 10 }),
                shadow({ radius: 3, y: 2 }),
              ]}
            />
            <Rectangle
              modifiers={[
                frame({ width: 60, height: 80 }),
                cornerRadius(12),
                foregroundStyle(category.color),
                rotationEffect(15),
                offset({ x: 40, y: 10 }),
                shadow({ radius: 3, y: 2 }),
              ]}
            />
            <Rectangle
              modifiers={[
                frame({ width: 60, height: 80 }),
                cornerRadius(12),
                foregroundStyle(category.color),
                rotationEffect(-5),
                offset({ x: -20, y: 5 }),
                shadow({ radius: 3, y: 2 }),
              ]}
            />
            <Rectangle
              modifiers={[
                frame({ width: 60, height: 80 }),
                cornerRadius(12),
                foregroundStyle(category.color),
                rotationEffect(5),
                offset({ x: 20, y: 0 }),
                shadow({ radius: 3, y: 2 }),
              ]}
            />
          </ZStack>

          <VStack
            alignment="center"
            spacing={6}
            modifiers={[
              frame({ width: 180, height: 80 }),
              glassEffect({
                glass: {
                  variant: "clear",
                  interactive: true,
                },
                cornerRadius: 24,
                shape: "roundedRectangle",
              }),
              padding({ all: 16 }),
            ]}
          >
            <Text
              modifiers={[
                font({ size: 20, weight: "medium", design: "serif" }),
              ]}
            >
              {category.name}
            </Text>

            <Text
              modifiers={[
                padding({ top: 4, bottom: 4, leading: 10, trailing: 10 }),
                font({ size: 14, weight: "bold" }),
                foregroundStyle("gray"),
                background(
                  "#f3f4f6",
                  shapes.roundedRectangle({ cornerRadius: 16 }),
                ),
              ]}
            >
              {category.count} Nodes
            </Text>
          </VStack>
        </ZStack>
      </VStack>
    </Button>
  );
}

export default function ColectionSection({
  id,
  description,
  setDescription,
  collectionId, // Added from parent
  setCollectionId,
}: {
  id: string;
  setDescription: Dispatch<SetStateAction<string>>;
  description: string;
  collectionId: string; // Added typing for the prop
  setCollectionId: Dispatch<SetStateAction<string>>;
}) {
  const { collections, createCollection } = usePersistentAppStore();

  return (
    <Section title="">
      <LabeledContent label="Select a collection">
        <Button
          label="Create new"
          onPress={() => {
            Alert.prompt(
              "Create Collection",
              `Please enter your new collection name!`,
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: (text: string | undefined) => {
                    if (text && text.trim().length > 0) {
                      const newId = createCollection(text.trim());
                      // Updates the parent state directly!
                      setCollectionId(newId);
                    }
                  },
                },
              ],
              "plain-text",
              "",
            );
          }}
          modifiers={[
            labelStyle("titleAndIcon"),
            buttonStyle("glassProminent"),
            controlSize("small"),
          ]}
        />
      </LabeledContent>

      {collections.length > 0 ? (
        <>
          <ScrollView axes="horizontal" showsIndicators={true}>
            <HStack
              spacing={16}
              modifiers={[padding({ horizontal: 16, vertical: 10 })]}
            >
              {collections.map((collection, index) => {
                const mappedCategory = {
                  id: collection.id,
                  name: collection.name,
                  count: collection.nodes.length,
                  color: COLORS[index % COLORS.length],
                };

                return (
                  <NativeCategoryCard
                    key={collection.id}
                    category={mappedCategory}
                    // Check against the parent's collectionId state
                    isSelected={collection.id === collectionId}
                    onSelect={() => {
                      setCollectionId(collection.id);
                    }}
                  />
                );
              })}
            </HStack>
          </ScrollView>
          <LabeledContent label="Description">
            <TextField
              placeholder="(Optional)"
              autocorrection
              defaultValue={description}
              onChangeText={(text) => setDescription(text)}
              multiline={false}
              allowNewlines={false}
            />
          </LabeledContent>
        </>
      ) : (
        <></>
      )}
    </Section>
  );
}
