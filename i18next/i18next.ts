import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/i18next/locales/en";
import cr from "@/i18next/locales/cr";
import { createMMKV } from "react-native-mmkv";

const storage = createMMKV();
const resolveLanguage = (): "en" | "cr" => {
  try {
    const rawState = storage.getString("global-app-storage");

    if (rawState) {
      const parsed = JSON.parse(rawState);
      const savedLng = parsed.state?.lng;

      if (savedLng === "en" || savedLng === "cr") {
        return savedLng;
      }
    }
  } catch (error) {
    console.error("Failed to resolve language from storage", error);
  }

  return "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    cr: { translation: cr },
  },
  lng: resolveLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
