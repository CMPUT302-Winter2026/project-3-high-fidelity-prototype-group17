import { Link, Redirect, type Href } from "expo-router";
import { Text, View } from "react-native";
import Page from "@/components/page";
import { PressableScale } from "pressto";

export default function Home() {
  return <Redirect href={"/tabs"} />;
}
