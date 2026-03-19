import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { PressableScale } from "pressto";
import { Pressable, Text, View } from "react-native";

export const Header = ({
  header = "",
  backIcon = "",
}: {
  header?: string;
  backIcon?: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        {header}
      </Text>
      {backIcon.length > 0 && (
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
      )}
    </View>
  );
};
