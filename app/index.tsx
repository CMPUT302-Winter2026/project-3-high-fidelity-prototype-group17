import { Link, type Href } from "expo-router";
import { Platform, View } from "react-native";
import Page from "@/components/page";
import { PressableScale } from "pressto";

import {
  Canvas,
  Group,
  Mask,
  matchFont,
  Rect,
  rect,
  RoundedRect,
  rrect,
  Text,
} from "@shopify/react-native-skia";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  cancelAnimation,
  interpolate,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { hapticWithSequence } from "@/utils/haptics-with-seq";
import { runOnJS } from "react-native-worklets";
import { useRef } from "react";
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
        <Link href={e.href} asChild key={i}>
          <PressableScale>
            <View className=" w-full h-48 bg-red-500 rounded-3xl"></View>
          </PressableScale>
        </Link>
      ))}
    </Page>
  );
}
