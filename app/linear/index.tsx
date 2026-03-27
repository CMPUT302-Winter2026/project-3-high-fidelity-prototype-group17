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
import { SheetButtons } from "@/components/sheet-buttons";
import { View } from "react-native";
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
        <View style={{ paddingHorizontal: 24 }}>
          <SheetButtons
            actions={[
              {
                buttonContent: (
                  <>
                    <Image systemName="plus" />
                    <Text>Collections</Text>
                  </>
                ),
                onClick: () => {
                  router.push("/linear/b");
                },
                isCancel: false,
              },
              {
                buttonContent: (
                  <>
                    <Image systemName="xmark" />
                    <Text>Cancel</Text>
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
