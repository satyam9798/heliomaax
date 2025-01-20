import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "ABOUT COMPANY": "About Company",
      },
    },
    hi: {
      translation: {
        "ABOUT COMPANY": "कंपनी के बारे में",
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
