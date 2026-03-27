import { Link, type Href } from "expo-router";
import { Text, View } from "react-native";
import Page from "@/components/page";
import { PressableScale } from "pressto";
import { useTranslation } from "react-i18next";
import { usePersistentAppStore } from "@/store/global-persistent";
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
    href: "/tabs/categories",
  },
  // {
  //   title: "Linguist screen",
  //   description: "Slight slide from bottom.",
  //   href: "/linguist",
  // },
] as const;

export default function Home() {
  const { t } = useTranslation();
  const { setLng, lng } = usePersistentAppStore();
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
      <Text>{t("common.explore")}</Text>
      <PressableScale
        onPress={() => {
          setLng(lng === "en" ? "cr" : "en");
        }}
      >
        <Text>Change lng</Text>
      </PressableScale>
    </Page>
  );
}
