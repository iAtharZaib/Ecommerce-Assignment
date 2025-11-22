import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';
import { useTheme } from '@/theme';

import { Example, Login, Startup } from '@/screens';
import LandingPage from '@/screens/LandingPage';
import NotificationScreen from '@/screens/NotificationPage';
import SettingsScreen from '@/screens/Settings';
import Signup from '@/screens/Signup';
import CartScreen from '@/screens/CartScreen';
const isRTL = I18nManager.isRTL;

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer direction={isRTL ? 'rtl' : 'ltr'} theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={LandingPage} name={Paths.LandingPage} />
          <Stack.Screen component={SettingsScreen} name={Paths.Settings} />
          <Stack.Screen component={NotificationScreen} name={Paths.Notification} />
          <Stack.Screen component={CartScreen} name={Paths.Cart} />
          <Stack.Screen component={Login} name={Paths.Login} />
          <Stack.Screen component={Signup} name={Paths.Signup} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={Example} name={Paths.Example} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
