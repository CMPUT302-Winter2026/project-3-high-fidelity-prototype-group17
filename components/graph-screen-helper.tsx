import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

export function GraphScreenHelper() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <View className="flex-row gap-2 items-center justify-center">
        <SymbolView
          name={{
            ios: "hand.tap.fill",
            android: "touch_app",
            web: "touch_app",
          }}
          size={20}
        />
        <View className="flex-col items-start justify-center h-full ">
          <Text className="font-bold text-sm" style={{ fontFamily: "system" }}>
            How to explore
          </Text>
          <Text className="text-sm -mt-1" style={{ fontFamily: "system" }}>
            Press and hold any node to view its details.
          </Text>
        </View>
      </View>
    </View>
  );
}
