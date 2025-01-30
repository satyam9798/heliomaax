import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Load translations from files
  .use(initReactI18next)
  .init({
    lng: "hi", // Default language
    fallbackLng: "hi",
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         "ABOUT COMPANY": "About Company",
//       },
//     },
//     hi: {
//       translation: {
//         "ABOUT COMPANY": "कंपनी के बारे में",
//       },
//     },
//   },
//   lng: "en", 
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
