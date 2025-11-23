import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { I18nManager } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styles from '@/shared/formstyles';

import ApplicationNavigator from '@/navigation/Application';
import { ThemeProvider } from '@/theme';
import '@/translations';

import { persistor, store } from './redux/store/store';

import messaging from '@react-native-firebase/messaging';
import { requestUserPermission, listenForNotifications, requestNotificationPermission } from '@/shared/notificationService';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { addNotification } from './redux/slices/notificationSlice';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export const storage = new MMKV();

function App() {
  useEffect(() => {
    requestNotificationPermission();
    requestUserPermission();
    listenForNotifications();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      const title = remoteMessage.notification?.title ?? remoteMessage.data?.title ?? 'Notification';
      const body = remoteMessage.notification?.body ?? remoteMessage.data?.body ?? '';
      const date= remoteMessage.sentTime ? new Date(remoteMessage.sentTime).toLocaleString() : new Date().toLocaleString();
      const id = remoteMessage.messageId ?? '';
      store.dispatch(
      addNotification({
        title,
        body,
        id,
        date,
      }),
    );
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: 'default',
        importance: AndroidImportance.HIGH,
        sound: 'default',
        pressAction: { id: 'default' },
      },
    });
    });

    async function createAndroidChannel() {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
        sound: 'default',
      });
    }

    createAndroidChannel();
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider storage={storage}>
            <ApplicationNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
