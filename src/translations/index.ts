import 'intl-pluralrules';

import type { Language } from '@/hooks/language/schema';

import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import ar from './ar-AR.json';
import en from './en-EN.json';

export const defaultNS = 'ecomapp';

export const resources = {
  'ar-AR': ar,
  'en-EN': en,
} as const satisfies Record<Language, unknown>;

const LANGUAGE_KEY = 'APP_LANGUAGE';

// Helper to set RTL direction
const setRTL = (lang: Language) => {
  const isRTL = lang.startsWith('ar');
  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
};

void (async () => {
  try {
    const savedLang = (await AsyncStorage.getItem(LANGUAGE_KEY)) ?? 'en-EN';
    setRTL(savedLang as Language);

    await i18n.use(initReactI18next).init({
      defaultNS,
      fallbackLng: 'en-EN',
      interpolation: { escapeValue: false },
      lng: savedLang,
      resources,
    });

    // Capitalization formatter
    i18n.services.formatter?.add(
      'capitalize',
      (value: string) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    );
  } catch (error) {
    console.error('i18n init error:', error);
  }
})();

export { default } from 'i18next';
