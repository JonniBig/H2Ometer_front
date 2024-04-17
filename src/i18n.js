import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './translations/en.json';
import ukTranslation from './translations/uk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
    },
  });

// i18n.on('languageChanged', lang => {
//   window.location.reload();
// });

export default i18n;
