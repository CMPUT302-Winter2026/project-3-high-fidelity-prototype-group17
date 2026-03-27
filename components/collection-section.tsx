import { useCollectionStore } from "@/store/global";
import {
  Button,
  HStack,
  LabeledContent,
  Picker,
  Rectangle,
  ScrollView,
  Section,
  Spacer,
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
import { router } from "expo-router";
import React, { useEffect, useState } from "react";

const CATEGORIES = [
  { id: "1", name: "Animals", count: 10, color: "#3b4b8a" },
  { id: "2", name: "Plants", count: 24, color: "#2ecc71" },
  { id: "3", name: "Landscapes", count: 15, color: "#e74c3c" },
  { id: "4", name: "Architecture", count: 42, color: "#8e44ad" },
];

function NativeCategoryCard({
  category,
  isSelected,
  onSelect,
}: {
  category: any;
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

export default function ColectionSection() {
  const { name, setName } = useCollectionStore();
  useEffect(() => {
    setName("");
  }, []);
  const [description, setDescription] = useState("");
  return (
    <Section title="">
      <LabeledContent label="Select a collection">
        <Button
          label="Create new"
          onPress={() => {
            router.push("/linear/c");
          }}
          modifiers={[
            labelStyle("titleAndIcon"),
            buttonStyle("glassProminent"),
            controlSize("small"),
          ]}
        />
      </LabeledContent>

      <ScrollView axes="horizontal" showsIndicators={true}>
        <HStack
          spacing={16}
          modifiers={[padding({ horizontal: 16, vertical: 10 })]}
        >
          {CATEGORIES.map((category) => (
            <NativeCategoryCard
              key={category.id}
              category={category}
              isSelected={category.id === name}
              onSelect={() => {
                setName(category.id);
              }}
            />
          ))}
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
    </Section>
  );
}
