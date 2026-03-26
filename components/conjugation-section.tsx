import {
  HStack,
  Picker,
  Section,
  Spacer,
  Text,
  VStack,
} from "@expo/ui/swift-ui";
import { font, frame, pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import React from "react";

const TableRow = ({
  col1,
  col2,
  col3,
  col4,
}: {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}) => (
  <HStack spacing={4}>
    <Text
      markdownEnabled
      modifiers={[
        frame({ maxWidth: 50, alignment: "leading" }),
        font({ size: 14 }),
      ]}
    >
      {col1}
    </Text>
    <Spacer />
    <Text
      markdownEnabled
      modifiers={[
        frame({ maxWidth: 50, alignment: "leading" }),
        font({ size: 14 }),
      ]}
    >
      {col2}
    </Text>
    <Spacer />
    <Text
      markdownEnabled
      modifiers={[
        frame({ maxWidth: 50, alignment: "leading" }),
        font({ size: 14 }),
      ]}
    >
      {col3}
    </Text>
    <Spacer />
    <Text
      markdownEnabled
      modifiers={[
        frame({ maxWidth: 50, alignment: "leading" }),
        font({ size: 14 }),
      ]}
    >
      {col4}
    </Text>
  </HStack>
);

export default function ConjugationSection() {
  return (
    <Section title="Word conjugation ᴬᴱᶜᴰ">
      {/* Top Header / Picker Row */}
      <Picker
        modifiers={[pickerStyle("segmented")]}
        label="some thing"
        selection={"option1"}
      >
        <Text modifiers={[tag("option1")]}> English Label </Text>
        <Text modifiers={[tag("option2")]}>Linguistic </Text>
        <Text modifiers={[tag("option3")]}>Nehiyawewin </Text>
      </Picker>

      <VStack spacing={20}>
        {/* Top Definitions */}
        <HStack alignment="center">
          <Text markdownEnabled>*only one*</Text>
          <Spacer />
          <Text>acimosis</Text>
        </HStack>
        <HStack>
          <Text markdownEnabled>*two or more*</Text>
          <Spacer />
          <Text markdownEnabled>**acimosisak**</Text>
        </HStack>
        <HStack>
          <Text markdownEnabled>*another / others*</Text>
          <Spacer />
          <Text markdownEnabled>**acimosisa**</Text>
        </HStack>

        {/* Centered Subtitle */}
        <Text markdownEnabled modifiers={[frame({ alignment: "center" })]}>
          *smaller / younger*
        </Text>

        {/* Middle Definition */}

        <HStack>
          <Text markdownEnabled>*only one*</Text>
          <Spacer />
          <Text>—</Text>
        </HStack>

        {/* Centered Subtitle */}
        <Text markdownEnabled>*whose / whom something belongs to*</Text>

        {/* Main Table */}
        <VStack spacing={12}>
          {/* Header Row */}
          <TableRow
            col1=""
            col2="**only one**"
            col3="**two or more**"
            col4="**another / others**"
          />
          {/* Data Rows */}
          <TableRow
            col1="*my*"
            col2="nicacimosisim"
            col3="nicacimosisimak"
            col4="nicacimosisima"
          />
          <TableRow
            col1="*your (one)*"
            col2="kicacimosisim"
            col3="kicacimosisimak"
            col4="kicacimosisima"
          />
          <TableRow col1="*his/her*" col2="—" col3="—" col4="ocacimosisima" />
          <TableRow
            col1="*our (but not your)*"
            col2="nicacimosisiminân"
            col3="nicacimosisiminânak"
            col4="nicacimosisiminâna"
          />
          <TableRow
            col1="*your and our*"
            col2="kicacimosisiminaw"
            col3="kicacimosisiminawak"
            col4="kicacimosisiminawa"
          />
          <TableRow
            col1="*your (all)*"
            col2="kicacimosisimiwâw"
            col3="kicacimosisimiwâwak"
            col4="kicacimosisimiwâwa"
          />
          <TableRow col1="*their*" col2="—" col3="—" col4="ocacimosisimiwâwa" />
          <TableRow
            col1="*another's/others'*"
            col2="—"
            col3="—"
            col4="ocacimosisimiyiwa"
          />
        </VStack>
      </VStack>
    </Section>
  );
}
