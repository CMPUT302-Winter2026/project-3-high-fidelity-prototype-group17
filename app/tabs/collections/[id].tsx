import SkiaGraph from "@/components/skia-graph";
import { useLocalSearchParams } from "expo-router";
import { useWindowDimensions, View } from "react-native";

export default function ImageDetail() {
  const { id, image, placeholder } = useLocalSearchParams<{
    id: string;
    image: string;
    placeholder: string;
  }>();

  const { width } = useWindowDimensions();

  return (
    <View className="flex-1">
      <SkiaGraph newNode={true} id={id} />
    </View>
  );
}
