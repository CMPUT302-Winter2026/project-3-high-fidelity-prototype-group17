import { router, type Href } from "expo-router";
import { View, Text as RnText } from "react-native";
import Page from "@/components/page";
import { PressableScale } from "pressto";
import { GlassView } from "expo-glass-effect";
import {
  Host,
  ZStack,
  HStack,
  Button,
  Menu,
  Toggle,
  Divider,
  Spacer,
  Rectangle,
  Text,
  Circle,
} from "@expo/ui/swift-ui";
import {
  buttonStyle,
  fixedSize,
  font,
  foregroundStyle,
  frame,
  glassEffect,
  labelStyle,
} from "@expo/ui/swift-ui/modifiers";
import { Image } from "expo-image";
type PageType = {
  title: string;
  description: string;
  href: Href;
  testID?: string;
};

const screenTransitions: PageType[] = [
  // {
  //   title: "Student screen",
  //   description: "Slide from top.",
  //   href: "/student",
  // },
  {
    title: "Teacher screen",
    description: "Modal slide from bottom.",
    href: "/teacher/categories",
  },
  // {
  //   title: "Linguist screen",
  //   description: "Slight slide from bottom.",
  //   href: "/linguist",
  // },
] as const;

export default function Home() {
  return (
    <Page
      title="Choose a mode"
      description="Are you a student, teacher or a linguist ?"
      testID="HOME_PAGE"
    >
      {screenTransitions.map((e, i) => (
        <PressableScale key={i} onPress={() => router.navigate(e.href)}>
          <View className=" w-full h-48 bg-red-500 rounded-3xl"></View>
        </PressableScale>
      ))}
    </Page>
  );
}
