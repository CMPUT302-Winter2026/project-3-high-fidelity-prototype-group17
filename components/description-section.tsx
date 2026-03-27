import { Picker, Section, Text } from "@expo/ui/swift-ui";

export default function DescriptionSection({
  sectionname,
}: {
  sectionname?: string;
}) {
  return (
    <Section title={"Description"}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        facilisis nibh. Curabitur posuere facilisis neque vel interdum.
        Phasellus venenatis ornare metus, vitae posuere urna posuere vitae.
        Integer pellentesque risus lacus, in vehicula sem viverra nec.
      </Text>
    </Section>
  );
}
