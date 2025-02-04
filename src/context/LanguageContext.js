import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n"; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "hi");

  useEffect(() => {
    i18n.changeLanguage(language); 
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); 
    i18n.changeLanguage(lang); 
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
