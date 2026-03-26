import {
  HStack,
  Section,
  Spacer,
  Text,
  VStack,
  Divider,
  Button,
  Popover,
  Host,
  ZStack,
  Rectangle,
} from "@expo/ui/swift-ui";
import {
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
} from "@expo/ui/swift-ui/modifiers";
import React, { useState } from "react";
import { Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const DefinitionRow = ({
  index,
  text,
  tagLabel,
  tagDesc,
}: {
  index: number;
  text: string;
  tagLabel: string;
  tagDesc: string;
}) => {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <HStack spacing={6} alignment="center">
      <Text>{`${index}. ${text}`}</Text>

      <Popover
        isPresented={isPresented}
        onIsPresentedChange={(isPresented) => setIsPresented(isPresented)}
      >
        <Popover.Trigger>
          <Button
            onPress={() => setIsPresented(true)}
            modifiers={[buttonStyle("plain")]}
          >
            <HStack
              alignment="center"
              modifiers={[
                frame({ width: 36, height: 18 }), // Keeps your badge size
                glassEffect({
                  glass: {
                    interactive: true,
                    variant: "clear",
                  },
                }),
                offset({ y: 0, x: 0 }),
              ]}
            >
              <Text
                modifiers={[
                  font({ size: 8, weight: "bold" }),
                  foregroundStyle("#3b4b8a"), // Deep blue text
                ]}
              >
                {tagLabel}
              </Text>
            </HStack>
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <VStack modifiers={[padding({ all: 16 })]}>
            <Text>{tagDesc}</Text>
          </VStack>
        </Popover.Content>
      </Popover>
    </HStack>
  );
};

export default function WordInfoSection() {
  return (
    <Section>
      <VStack
        spacing={20}
        alignment="leading"
        modifiers={[frame({ width: SCREEN_WIDTH - 96 })]}
      >
        <VStack spacing={8}>
          <HStack alignment="top">
            <Text modifiers={[font({ size: 28, weight: "bold" })]}>
              acimosis
            </Text>
            <Spacer />
            <HStack spacing={8}>
              <Text markdownEnabled> **NA-1**</Text>
              <Button
                systemImage="speaker.wave.2.fill"
                label="adad"
                modifiers={[
                  labelStyle("iconOnly"),
                  controlSize("regular"),
                  buttonStyle("glassProminent"),
                ]}
              />
            </HStack>
          </HStack>
          <Divider />
        </VStack>

        <VStack spacing={10} alignment="leading">
          <DefinitionRow
            index={1}
            text="pup, puppy"
            tagLabel="CW"
            tagDesc="adjaskdjksaj akdjksad kajdkasjk ajkdjakdjasj k"
          />
          <DefinitionRow
            index={2}
            text="small dog"
            tagLabel="CW"
            tagDesc="adjaskdjksaj akdjksad kajdkasjk ajkdjakdjasj k"
          />
          <DefinitionRow
            index={3}
            text="a pup or a puppy"
            tagLabel="AECD"
            tagDesc="adjaskdjksaj akdjksad kajdkasjk ajkdjakdjasj k"
          />
          <DefinitionRow
            index={4}
            text="a newborn dog"
            tagLabel="AECD"
            tagDesc="adjaskdjksaj akdjksad kajdkasjk ajkdjakdjasj k"
          />
        </VStack>
      </VStack>
    </Section>
  );
}
