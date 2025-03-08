import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useEffect } from "react";

const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Fallback to 'en' if no language is saved

// Log de browsertaal en de opgeslagen taal
console.log("Browser language:", navigator.language); // Dit logt de browsertaal
console.log("Selected language from localStorage:", savedLanguage); // Dit logt de taal opgeslagen in localStorage

i18n.changeLanguage(navigator.language);
i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Bind to React
  .init({
    resources: {
      en: { translation: { language: "English" } },
      nl: { translation: { language: "Nederlands" } },
      fr: { translation: { language: "Français" } },
    },
    lng: savedLanguage, // Set default language
    fallbackLng: ["nl", "fr", "en"], // Fallback languages
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"], // Order of detection
      caches: ["localStorage"], // Cache detected language in localStorage
    },
  });

export default i18n;
