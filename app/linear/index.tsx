import { router } from "expo-router";
import { Tray } from "@/components/tray";

import {
  Button,
  Form,
  Host,
  HStack,
  Spacer,
  Text,
  Image,
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
export default function Screen() {
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
            <WordInfoSection />
            <ConjugationSection />
          </Form>
        </Host>
        <PurchaseButtons />
      </Tray.Content>
    </Tray.View>
  );
}

function PurchaseButtons() {
  return (
    <Host matchContents>
      <HStack
        modifiers={[
          frame({ alignment: "center" }),
          padding({ horizontal: 24 }),
        ]}
      >
        <Button
          onPress={() => router.push("/linear/b")}
          systemImage="plus"
          modifiers={[
            labelStyle("titleAndIcon"),
            buttonStyle("glassProminent"),
            controlSize("large"),
            background("", shapes.roundedRectangle({ cornerRadius: 10 })),
          ]}
        >
          <HStack
            spacing={24}
            modifiers={[frame({ width: 144, alignment: "center" })]}
          >
            <Image systemName="plus" />
            <Text>Collection</Text>
          </HStack>
        </Button>
        <Spacer />
        <Button
          onPress={() => {
            router.back();
          }}
          modifiers={[
            buttonStyle("glassProminent"),
            controlSize("large"),
            tint("black"),
            foregroundStyle("white"),
            background(
              "#f1f1f1",
              shapes.roundedRectangle({ cornerRadius: 10 }),
            ),
          ]}
        >
          <Text modifiers={[frame({ width: 144, alignment: "center" })]}>
            Cancel
          </Text>
        </Button>
      </HStack>
    </Host>
  );
}
