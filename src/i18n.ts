import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import nl from "./locales/nl.json";
import fr from "./locales/fr.json";
const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
    fr: { translation: fr },
  },
  lng: savedLanguage,
  fallbackLng: ["nl", "en", "fr"],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("selectedLanguage", lng);
});

export default i18n;
