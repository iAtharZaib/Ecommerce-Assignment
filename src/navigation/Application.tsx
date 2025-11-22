import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Paths } from '@/navigation/paths';
import { Login } from '@/screens';
import LandingPage from '@/screens/LandingPage';
import NotificationScreen from '@/screens/NotificationPage';
import SettingsScreen from '@/screens/Settings';
import Signup from '@/screens/Signup';
import CartScreen from '@/screens/CartScreen';
import TopBar from '@/components/Topbar';

const isRTL = I18nManager.isRTL;

const Stack = createStackNavigator<RootStackParamList>();

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <TopBar />,
        headerStatusBarHeight: 0,
      }}
    >
      <Stack.Screen component={LandingPage} name={Paths.LandingPage} />
      <Stack.Screen component={CartScreen} name={Paths.Cart} />
      <Stack.Screen component={NotificationScreen} name={Paths.Notification} />
      <Stack.Screen component={SettingsScreen} name={Paths.Settings} />
    </Stack.Navigator>
  );
}

function UnauthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name={Paths.Login} />
      <Stack.Screen component={Signup} name={Paths.Signup} />
    </Stack.Navigator>
  );
}

function ApplicationNavigator() {
const isLoggedIn = useSelector((state: any) => state.user?.isLoggedIn);

  return (
    <SafeAreaProvider>
      <NavigationContainer direction={isRTL ? 'rtl' : 'ltr'}>
        {isLoggedIn ? <AuthenticatedStack /> : <UnauthenticatedStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
