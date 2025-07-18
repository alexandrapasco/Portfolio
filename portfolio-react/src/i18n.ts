// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonFr from './locales/fr/common.json';
import commonEn from './locales/en/common.json';


i18n.use(initReactI18next).init({
  resources: {
    fr: {
      common: commonFr,
    },
    en: {
      common: commonEn,
    },
  },
  lng: 'fr', // langue par défaut
  fallbackLng: 'fr',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // React gère déjà l'échappement
  },
});

export default i18n;
