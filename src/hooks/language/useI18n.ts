import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { SupportedLanguages } from './schema';

const LANGUAGE_KEY = 'APP_LANGUAGE';

const setRTL = (lang: SupportedLanguages) => {
  const isRTL = lang === SupportedLanguages.AR_AR;
  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
};

export const useI18n = () => {
  const changeLanguage = async (lang: SupportedLanguages) => {
    if (i18next.language === lang) return;

    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
    setRTL(lang);
    await i18next.changeLanguage(lang);
    RNRestart.Restart(); 
  };

  const toggleLanguage = async () => {
    const newLang =
      i18next.language === SupportedLanguages.EN_EN
        ? SupportedLanguages.AR_AR
        : SupportedLanguages.EN_EN;
    await changeLanguage(newLang);
  };

  return { changeLanguage, toggleLanguage };
};
