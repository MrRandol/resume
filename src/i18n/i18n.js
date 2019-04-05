import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from "react-i18next";
import { en } from './en';
import { fr } from './fr';

// the translations
const resources = {
  en: en,
  fr: fr
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
