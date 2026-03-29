import { RAW_NODES } from "@/utils/data";
import {
  HStack,
  Picker,
  Section,
  Spacer,
  Text,
  VStack,
} from "@expo/ui/swift-ui";
import { font, frame, pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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

export default function ConjugationSection({
  id,
  sectionname,
}: {
  id: string;
  sectionname?: string;
}) {
  const [labelParadigm, setLabelParadigm] = useState("ENGLISH");
  const { t } = useTranslation();
  const data = RAW_NODES.find((e) => e.id === id);

  if (!data) return null;
  const conjugationData = data.word_conjugation;

  const getUILabelKey = (baseKey: string) =>
    `LABEL_${labelParadigm}_${baseKey}`;
  const safeTranslate = (key: string) => (key === "—" ? "—" : t(key));

  return (
    <Section title={sectionname || "Word conjugation ᴬᴱᶜᴰ"}>
      {/* Top Header / Picker Row */}
      <Picker
        modifiers={[pickerStyle("segmented")]}
        label="Label Type"
        selection={labelParadigm}
        onSelectionChange={(val) => setLabelParadigm(val as string)}
      >
        <Text modifiers={[tag("ENGLISH")]}>English Label</Text>
        <Text modifiers={[tag("LINGUISTIC")]}>Linguistic</Text>
        <Text modifiers={[tag("NEHIYAWEWIN")]}>Nehiyawewin</Text>
      </Picker>

      <VStack spacing={20}>
        {/* Top Definitions */}
        {conjugationData.basic.map((item: any, idx: number) => (
          <HStack key={idx} alignment={idx === 0 ? "center" : undefined}>
            {/* Using the explicit helper here */}
            <Text markdownEnabled>*{t(getUILabelKey(item.labelKey))}*</Text>
            <Spacer />
            <Text markdownEnabled>
              {item.isBold
                ? `**${safeTranslate(item.valueKey)}**`
                : safeTranslate(item.valueKey)}
            </Text>
          </HStack>
        ))}

        {conjugationData.possession && (
          <>
            {/* Centered Subtitle */}
            <Text markdownEnabled>
              *{t(getUILabelKey(conjugationData.possession.titleKey))}*
            </Text>

            <VStack spacing={12}>
              {/* Header Row */}
              <TableRow
                col1=""
                col2={`**${t(getUILabelKey(conjugationData.possession.columns[0]))}**`}
                col3={`**${t(getUILabelKey(conjugationData.possession.columns[1]))}**`}
                col4={`**${t(getUILabelKey(conjugationData.possession.columns[2]))}**`}
              />

              {/* Data Rows */}
              {conjugationData.possession.rows.map((row: any, idx: number) => (
                <TableRow
                  key={idx}
                  col1={`*${t(getUILabelKey(row.labelKey))}*`}
                  col2={safeTranslate(row.valueKeys[0])}
                  col3={safeTranslate(row.valueKeys[1])}
                  col4={safeTranslate(row.valueKeys[2])}
                />
              ))}
            </VStack>
          </>
        )}
      </VStack>
    </Section>
  );
}
