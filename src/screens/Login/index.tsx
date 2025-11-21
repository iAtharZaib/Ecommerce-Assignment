import '../../../firebase'; // Initialize Firebase

import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  I18nManager,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Paths } from '@/navigation/paths';
import { RootScreenProps } from '@/navigation/types';

// validation regex helpers (commented out until used)
// import { emailRegex, passwordRegex } from '@/helpers';
import styles from '@/shared/formstyles';

function LoginScreen({ navigation }: RootScreenProps<Paths.Login>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  
    // if (!email || !password) {
    //   Alert.alert('Error', 'Please enter both email and password');
    //   return;
    // }

    // if (!emailRegex.test(email)) {
    //   Alert.alert('Error', 'Please enter a valid email address');
    //   return;
    // }

    // if (!passwordRegex.test(password)) {
    //   Alert.alert('Error', 'Password must be exactly 7 characters long');
    //   return;
    // }

    try {
      setLoading(true);
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      Alert.alert('Success', `Welcome ${userCredential.user.email}`);
      // TODO: Navigate to your home screen
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}>
        Login
      </Text>

      {/* Email Input */}
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Enter your Email"
        style={[styles.input, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
        value={email}
      />

      {/* Password Input + Emoji Eye */}
      <View style={styles.passwordWrapper}>
        <TextInput
          onChangeText={setPassword}
          placeholder="Password (7 characters)"
          secureTextEntry={!showPassword}
          style={[styles.passwordInput, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]}
          value={password}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
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
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
