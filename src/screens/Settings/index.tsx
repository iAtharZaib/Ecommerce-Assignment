import React from 'react';
import {
    Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { clearCart } from '@/redux/slices/cartSlice';
import { getUser, logoutUser } from '@/redux/slices/userSlice';
import auth from '@react-native-firebase/auth'
import styles from './styles';
import sharedStyles from '@/shared/formstyles';
import { useI18n } from '@/hooks/language/useI18n';
import { clearAllNotifications } from '@/redux/slices/notificationSlice';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { toggleLanguage } = useI18n();

  const user = useSelector(getUser);

  const handleLogout = () => {
    auth().signOut();
    dispatch(logoutUser());
    dispatch(clearAllNotifications());
    dispatch(clearCart())
    Alert.alert(t('settings_screen.settings_success'), t('settings_screen.settings_logout_successful'));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.profileCard}>
          <View style={styles.fieldRow}>
            <Text style={styles.fieldValue}>{user?.name || t('settings_screen.user_name')}</Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldValue}>{user?.email || t('settings_screen.user_email')}</Text>
          </View>

          <View style={styles.fieldRowLast}>
            <Text style={styles.fieldValue}>
              {user?.createdAt ? new Date(user.createdAt).toLocaleString() : ''}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleLanguage} style={sharedStyles.languageButton}>
            <Text style={sharedStyles.languageButtonText}>{t('settings_screen.change_language')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>{t('settings_screen.logout')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
