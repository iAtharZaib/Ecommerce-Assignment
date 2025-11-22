import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { clearCart } from '@/redux/slices/cartSlice';
import { getUser, logoutUser } from '@/redux/slices/userSlice';

import styles from './styles';
import { useI18n } from '@/hooks/language/useI18n';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { toggleLanguage } = useI18n();

  const user = useSelector(getUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart())
  };

  return (
    <View style={styles.mainContainer}>
      {/* SETTINGS CONTENT */}
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          {t('settings_screen.name')}: {user?.name || t('settings_screen.user_name')}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          {t('settings_screen.email')}: {user?.email || t('settings_screen.user_email')}
        </Text>

        <TouchableOpacity
          onPress={toggleLanguage}
          style={{
            backgroundColor: '#4F46E5',
            borderRadius: 12,
            paddingHorizontal: 32,
            paddingVertical: 12,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            {t('settings_screen.change_language')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: '#4F46E5',
            borderRadius: 12,
            paddingHorizontal: 32,
            paddingVertical: 12,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            {t('settings_screen.logout')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
