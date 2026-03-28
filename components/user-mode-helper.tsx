import { View, Text } from "react-native";
import { SymbolView } from "expo-symbols";
import { usePersistentAppStore } from "@/store/global-persistent";

export function UserModeHelper() {
  const { mode } = usePersistentAppStore();

  const modeConfig = {
    learner: {
      subtitle: "Using Learner Mode",
      icon: "graduationcap.fill",
    },
    teacher: {
      subtitle: "Using Teacher Mode",
      icon: "rectangle.and.pencil.and.ellipsis",
    },
    expert: {
      subtitle: "Using Expert Mode",
      icon: "microscope",
    },
  };

  const activeConfig =
    modeConfig[mode as keyof typeof modeConfig] || modeConfig.learner;

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
            ios: activeConfig.icon as any,
            android: "person",
            web: "person",
          }}
          size={20}
        />
        <View className="flex-col items-start justify-center h-full ">
          <Text className="font-bold text-sm" style={{ fontFamily: "system" }}>
            Welcome, Akarshan
          </Text>
          <Text className="text-sm -mt-1" style={{ fontFamily: "system" }}>
            {activeConfig.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}
