// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useI18n } from '@/hooks/language/useI18n';
import { Paths } from '@/navigation/paths';
import { RootScreenProps } from '@/navigation/types';

import { emailRegex, passwordRegex, usernameRegex } from '@/helpers';
import styles from '@/shared/formstyles';

function SignupScreen({ navigation }: RootScreenProps<Paths.Signup>) {
  const { toggleLanguage } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // Simple email regex


  const handleLogin = () => {
     if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    if (!usernameRegex.test(username)) {
      Alert.alert('Error', 'Username must be at least 5 characters long');
      return;
    }
     if (!passwordRegex.test(password)) {
        Alert.alert('Error', 'Password must be at least 7 characters long');
        return;
    }

     if (!email || !password || !username) {
         Alert.alert('Error', 'Please enter your details');
         return;
       }

   
    

   

    // Replace this with your login logic
    Alert.alert('Signup', `Email: ${email}\nPassword: ${password} \nUsername: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp Screen</Text>

      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Enter your Email"
        style={styles.input}
        value={email}
      />
   <TextInput
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={setUsername}
        placeholder="Enter your username"
        style={styles.input}
        value={username}
      />

     <View style={styles.passwordWrapper}>
        <TextInput
          onChangeText={setPassword}
          placeholder="Password (7 characters)"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
        />

        <TouchableOpacity
          onPress={() => { setShowPassword(!showPassword); }}
          style={styles.eyeButton}
        >
          <Text style={styles.eyeIcon}>
            {showPassword ? '🙈' : '👁️'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Signup </Text>
      </TouchableOpacity>


       <TouchableOpacity onPress={toggleLanguage} style={styles.button}>
        <Text style={styles.buttonText}>Change Language </Text>
      </TouchableOpacity>
    </View>
  );
}
export default SignupScreen;