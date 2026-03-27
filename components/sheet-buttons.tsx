import { Button, Host, HStack } from "@expo/ui/swift-ui";
import {
  Animation,
  animation,
  buttonStyle,
  controlSize,
  disabled,
  frame,
  tint,
} from "@expo/ui/swift-ui/modifiers";
import React from "react";
import { View } from "react-native";

export type SheetAction = {
  onClick: Function;
  buttonContent: React.ReactNode;
  isCancel?: boolean;
  isDisabled?: boolean;
};

function SheetButtons({ actions }: { actions: SheetAction[] }) {
  return (
    <View style={{ width: "100%" }}>
      <Host style={{ width: "100%" }} matchContents>
        <HStack
          spacing={12}
          modifiers={[
            frame({ alignment: "center" }),
            animation(Animation.spring({ duration: 0.4 }), true),
          ]}
        >
          {actions.map((action, index) => (
            <Button
              key={index}
              onPress={() => action.onClick?.()}
              modifiers={
                action.isCancel
                  ? [
                      buttonStyle("glassProminent"),
                      controlSize("large"),
                      ...(action.isCancel ? [tint("black")] : []),

                      disabled(!!action.isDisabled),
                    ]
                  : [
                      buttonStyle("glassProminent"),
                      controlSize("large"),
                      disabled(!!action.isDisabled),
                    ]
              }
            >
              <HStack
                spacing={8}
                alignment="center"
                modifiers={[frame({ maxWidth: 9999, alignment: "center" })]}
              >
                {action.buttonContent}
              </HStack>
            </Button>
          ))}
        </HStack>
      </Host>
    </View>
  );
}

export { SheetButtons };
