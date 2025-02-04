import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const savedLanguage = localStorage.getItem("language") || "hi";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage, 
    fallbackLng: "hi",
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
