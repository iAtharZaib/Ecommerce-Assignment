import React from 'react';
import {
  I18nManager,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '@/redux/slices/cartSlice';
import { getUser, logoutUser } from '@/redux/slices/userSlice';

import styles from './styles';
import { useI18n } from '@/hooks/language/useI18n';
import TopBar from '@/components/Topbar';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const isRTL = I18nManager.isRTL;
const { toggleLanguage } = useI18n();

  const user = useSelector(getUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart())
  };

  return (
    <View style={styles.mainContainer}>
      {/* TOP BAR */}
    <TopBar/>
      {/* SETTINGS CONTENT */}
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          {isRTL ? 'الاسم' : 'Name'}: {"user.name "|| 'User Name'}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          {isRTL ? 'البريد الإلكتروني' : 'Email'}: {"user.email" || 'user@example.com'}
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
            {isRTL ? 'تسجيل الخروج' : 'Change Language'}
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
            {isRTL ? 'تسجيل الخروج' : 'Logout'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
