import { RAW_NODES } from "@/utils/data";
import {
  HStack,
  Section,
  Spacer,
  Text,
  VStack,
  Divider,
  Button,
  Popover,
  RNHostView,
} from "@expo/ui/swift-ui";
import {
  buttonStyle,
  controlSize,
  font,
  foregroundStyle,
  frame,
  glassEffect,
  labelStyle,
  offset,
  padding,
} from "@expo/ui/swift-ui/modifiers";
import { Image } from "expo-image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, View } from "react-native";

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
  tagDesc?: string; // Made optional so it handles definitions without examples
}) => {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <HStack spacing={6} alignment="center">
      <Text>{`${index}. ${text}`}</Text>

      {/* Only render the Popover if there is an example description provided */}
      {!!tagDesc && (
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
                  frame({ width: 75, height: 18 }),
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
      )}
    </HStack>
  );
};

export default function WordInfoSection({ id }: { id: string }) {
  // Load data the exact same way as the conjugation section
  const data = RAW_NODES.find((e) => e.id === id);
  const { t } = useTranslation();
  if (!data) return null;

  // Destructure the data (Update these keys to match your exact RAW_NODES schema if they differ)
  const word = t(data.nls_key);
  const pos = data.stem_label;
  const synonyms = data.synonyms || [];
  const definitions = data.sentences;

  return (
    <Section>
      <VStack
        spacing={20}
        alignment="leading"
        modifiers={[frame({ width: SCREEN_WIDTH - 96 })]}
      >
        <VStack spacing={8} alignment="leading">
          <HStack alignment="top">
            <Text modifiers={[font({ size: 28, weight: "bold" })]}>{word}</Text>
            <Spacer />
            <HStack spacing={8}>
              {pos && <Text markdownEnabled>{` **${pos}**`}</Text>}
              <Button
                systemImage="speaker.wave.2.fill"
                label="Play Audio"
                modifiers={[
                  labelStyle("iconOnly"),
                  controlSize("regular"),
                  buttonStyle("glassProminent"),
                ]}
              />
            </HStack>
          </HStack>

          <Divider />

          {/* Conditionally render synonyms row only if they exist */}
          {synonyms.length > 0 && (
            <HStack spacing={6} alignment="center">
              <Text
                modifiers={[
                  font({ size: 14, weight: "semibold" }),
                  foregroundStyle("#666666"), // Subtle grey color for the label
                ]}
              >
                Synonyms:
              </Text>
              {synonyms.map((synonym: string, index: number) => (
                <Text
                  key={`synonym-${index}`}
                  modifiers={[
                    font({ size: 14, weight: "medium" }),
                    foregroundStyle("#3b4b8a"), // Matches your badge text color
                  ]}
                >
                  {synonym}
                </Text>
              ))}
            </HStack>
          )}
        </VStack>
        <HStack alignment="top" spacing={16}>
          <RNHostView matchContents>
            <View style={{ width: 100, height: 100 }}>
              <Image
                source={data.images}
                style={{ width: 100, height: 100, borderRadius: 12 }}
              />
            </View>
          </RNHostView>
          <VStack spacing={10} alignment="leading">
            {/* Dynamically map over the definitions array */}
            {definitions.map((def, index: number) => (
              <DefinitionRow
                key={`def-${index}`}
                index={index + 1}
                text={def.setence}
                tagLabel="View example"
                tagDesc={def.example}
              />
            ))}
          </VStack>
        </HStack>
      </VStack>
    </Section>
  );
}
