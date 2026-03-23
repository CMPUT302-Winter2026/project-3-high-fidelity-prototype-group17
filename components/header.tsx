import { Button, Divider, Host, Menu, Toggle } from "@expo/ui/swift-ui";
import {
  buttonStyle,
  fixedSize,
  font,
  foregroundStyle,
  frame,
  glassEffect,
  labelStyle,
} from "@expo/ui/swift-ui/modifiers";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { PressableScale } from "pressto";
import { Pressable, Text, View } from "react-native";

export const Header = ({
  header = "",
  backIcon = "",
  description = "",
}: {
  header?: string;
  backIcon?: string;
  description?: string;
}) => {
  return (
    <View style={{ gap: 2 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          className="font-sans text-4xl tracking-tight"
          style={{
            fontFamily: "Times New Roman",
          }}
        >
          {header}
        </Text>
        {/* {backIcon.length > 0 && (
          <PressableScale
            onPress={router.back}
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#404040",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="xmark" size={18} color="#FFF" />
          </PressableScale>
        )} */}

        <Host matchContents>
          <Menu
            modifiers={[
              labelStyle("iconOnly"),
              buttonStyle("plain"),
              foregroundStyle("#85ffff"),
              font({ size: 24 }),
              frame({ width: 44, height: 44 }),
              fixedSize({ horizontal: true, vertical: true }),
              glassEffect({
                glass: {
                  variant: "clear",
                  interactive: true,
                  tint: "#0287fd",
                },
                shape: "ellipse",
              }),
            ]}
            label="Options"
            systemImage="ellipsis"
          >
            <Button label="Edit" onPress={() => console.log("Edit")} />
            <Button
              label="Share"
              systemImage="square.and.arrow.up"
              onPress={() => console.log("Share")}
            />
            <Toggle
              isOn={true}
              label="blah blah"
              onIsOnChange={(value) => {}}
            />
            <Menu label="View Options" systemImage="eye">
              <Button
                label="List View"
                systemImage="list.bullet"
                onPress={() => console.log("List")}
              />
              <Button
                label="Grid View"
                systemImage="square.grid.2x2"
                onPress={() => console.log("Grid")}
              />
              <Menu label="Advanced Settings" systemImage="gear">
                <Button
                  label="Export Data"
                  systemImage="square.and.arrow.up"
                  onPress={() => console.log("Export")}
                />
                <Button
                  label="Reset All"
                  role="destructive"
                  systemImage="arrow.clockwise.circle"
                  onPress={() => console.log("Reset")}
                />
              </Menu>
            </Menu>
            <Divider />
            <Button
              label="Delete"
              role="destructive"
              systemImage="trash"
              onPress={() => console.log("Delete")}
            />
          </Menu>
        </Host>
      </View>

      <Text className="text-base text-gray-500">{description}</Text>
    </View>
  );
};
