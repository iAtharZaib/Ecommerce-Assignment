import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Paths } from '@/navigation/paths';
import { useTheme } from '@/theme';

import { Example, Login, Startup } from '@/screens';
import LandingPage from '@/screens/LandingPage';
import Signup from '@/screens/Signup';
const isRTL = I18nManager.isRTL;

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={{...navigationTheme, direction: isRTL ? "rtl" : "ltr"}}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={LandingPage} name={Paths.LandingPage} />
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
