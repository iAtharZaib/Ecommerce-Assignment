import '../../../firebase'; // Initialize Firebase

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  I18nManager,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


// validation regex helpers (commented out until used)
// import { emailRegex, passwordRegex } from '@/helpers';
import styles from '@/shared/formstyles';
import { useNavigation } from '@react-navigation/native';
import { Paths } from '@/navigation/paths';
import { emailRegex, passwordRegex } from '@/shared/helpers';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const handleLogin = async () => {
    
    if (!email || !password) {
      Alert.alert(t('login_screen.error'), t('login_screen.enter_both'));
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert(t('login_screen.error'), t('login_screen.invalid_email'));
      return;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert(t('login_screen.error'), t('login_screen.password_too_short'));
      return;
    }
    


    // try {
    //   setLoading(true);
    //   const userCredential = await auth().signInWithEmailAndPassword(email, password);
    //   setLoading(false);
    //   Alert.alert(t('login_screen.success'), `${t('login_screen.welcome')} ${userCredential.user.email}`);
    //   // TODO: Navigate to your home screen
    // } catch (error: any) {
    //   setLoading(false);
    //   Alert.alert(t('login_screen.login_failed'), String(error?.message ?? ''));
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>
        {t('login_screen.login')}
      </Text>

      {/* Email Input */}
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder={t('login_screen.enter_email')}
        style={[styles.input, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        value={email}
      />

      {/* Password Input + Emoji Eye */}
      <View style={styles.passwordWrapper}>
        <TextInput
          onChangeText={setPassword}
          placeholder={t('login_screen.password_7_chars')}
          secureTextEntry={!showPassword}
          style={[styles.passwordInput, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
          value={password}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
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

      {/* Login Button */}
      <TouchableOpacity
        disabled={loading}
        onPress={handleLogin}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{t('login_screen.login')}</Text>
        )}
      </TouchableOpacity>

       <TouchableOpacity
        disabled={loading}
        onPress={() => navigation.navigate(Paths.Signup)}
        style={styles.button}
      >
         <Text style={styles.buttonText}>{t('login_screen.dont_have_account')} · {t('signup_screen.signup')}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
