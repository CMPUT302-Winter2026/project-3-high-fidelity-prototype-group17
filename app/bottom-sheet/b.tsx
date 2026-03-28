import { router } from "expo-router";
import { Card } from "@/components/card-2";
import { Tray } from "@/components/tray";
import { View } from "react-native";
import { SheetButtons } from "@/components/sheet-buttons";
import { Form, Host, Image, Text } from "@expo/ui/swift-ui";
import ColectionSection from "@/components/collection-section";
import { useCollectionStore } from "@/store/global";

export default function Screen() {
  const { name } = useCollectionStore();
  return (
    <Tray.View snapPoint="50%" backgroundColor="#FFF">
      <Tray.Header title="Collections" />
      <Tray.Content>
        <View style={{ flex: 1 }}>
          <Host style={{ flex: 1 }}>
            <Form>
              <ColectionSection />
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
                isDisabled: name.length === 0,
                buttonContent: (
                  <>
                    <Image systemName="checkmark" />
                    <Text>Done</Text>
                  </>
                ),
                onClick: () => {
                  router.back();
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
