import React from "react";
import { View } from "react-native";
import { Form, Host } from "@expo/ui/swift-ui";
import WordInfoSection from "@/components/word-info-section";
import ConjugationSection from "@/components/conjugation-section";
import DescriptionSection from "@/components/description-section";

const LESSON_DATA = [
  { id: "1", word: "hablar" },
  { id: "2", word: "comer" },
  { id: "3", word: "vivir" },
  { id: "4", word: "escribir" },
];

export default function LessonPlanIndex() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <Host style={{ flex: 1 }}>
        <Form>
          {LESSON_DATA.map((lesson) => (
            <React.Fragment key={lesson.id}>
              <WordInfoSection />
              <DescriptionSection />
              <ConjugationSection
                sectionname={`${lesson.word} - Word conjugation ᴬᴱᶜᴰ`}
              />
            </React.Fragment>
          ))}
        </Form>
      </Host>
    </View>
  );
}
