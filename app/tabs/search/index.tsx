import { ScrollView } from "react-native";
import { Stack } from "expo-router";

export default function SearchIndex() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Search",
          headerSearchBarOptions: {
            placement: "automatic",
            placeholder: "Search",
            onChangeText: () => {},
          },
        }}
      />
      <ScrollView>{/* Screen content */}</ScrollView>
    </>
  );
}
