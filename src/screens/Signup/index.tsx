// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert, I18nManager, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useI18n } from '@/hooks/language/useI18n';
import { useTranslation } from 'react-i18next';
import { Paths } from '@/navigation/paths';

import { emailRegex, passwordRegex, usernameRegex } from '@/shared/helpers';
import styles from '@/shared/formstyles';
import { useNavigation } from '@react-navigation/native';

const SignupScreen: React.FC = () => {
  const { toggleLanguage } = useI18n();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Simple email regex


  const handleLogin = () => {
     if (!emailRegex.test(email)) {
      Alert.alert(t('signup_screen.error'), t('signup_screen.invalid_email'));
      return;
    }
    if (!usernameRegex.test(username)) {
      Alert.alert(t('signup_screen.error'), t('signup_screen.at_least_5_chars'));
      return;
    }
     if (!passwordRegex.test(password)) {
        Alert.alert(t('signup_screen.error'), t('signup_screen.password_at_least_7'));
        return;
    }

     if (!email || !password || !username) {
         Alert.alert(t('signup_screen.error'), t('signup_screen.enter_details'));
         return;
       }

    // Replace this with your login logic
    Alert.alert(t('signup_screen.signup'), `${t('signup_screen.username')}: ${username}\n${t('login_screen.enter_email')}: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>{t('signup_screen.signup')}</Text>

      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder={t('login_screen.enter_email')}
        style={[styles.input, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        value={email}
      />
   <TextInput
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={setUsername}
        placeholder={t('signup_screen.username')}
        style={[styles.input, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        value={username}
      />

     <View style={styles.passwordWrapper}>
        <TextInput
          onChangeText={setPassword}
          placeholder={t('login_screen.password_7_chars')}
          secureTextEntry={!showPassword}
          style={[styles.passwordInput, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
          value={password}
        />

        <TouchableOpacity
          onPress={() => { setShowPassword(!showPassword); }}
          style={styles.eyeButton}
        >
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={22}
            color="#333"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>{t('signup_screen.signup')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Paths.Login)} style={styles.linkButton}>
        <Text style={styles.linkButtonText}>{t('signup_screen.already_have_account')} {t('login_screen.login')}</Text>
      </TouchableOpacity>


       <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
        <Text style={styles.languageButtonText}>{t('settings_screen.change_language')}</Text>
      </TouchableOpacity>
      </View>
  );
}
export default SignupScreen;