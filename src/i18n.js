import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  de: { translation: translationDE },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector) // auto detect browser language
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "de",
    debug: true,
    interpolation: { escapeValue: false }, 
  });

export default i18n;