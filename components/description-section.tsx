import { Picker, Section, Text } from "@expo/ui/swift-ui";

export default function DescriptionSection({ text }: { text?: string }) {
  return (
    <Section title={"Description"}>
      <Text>{text}</Text>
    </Section>
  );
}
