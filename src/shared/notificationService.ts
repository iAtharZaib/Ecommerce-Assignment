import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { store } from '@/redux/store/store';
import { addNotification } from '@/redux/slices/notificationSlice';
import { PermissionsAndroid, Platform } from 'react-native';

export const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
    } catch (err) {
      console.log(err);
    }
  }
};
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    await getFCMToken();
  }
};

export const getFCMToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Device FCM Token:', fcmToken);
    } else {
      console.log('Failed to retrieve FCM token');
    }
  } catch (error) {
    console.log('Error retrieving FCM token:', error);
  }
};

export const listenForNotifications = () => {
  messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    console.log('Foreground message:', remoteMessage);

    const title = remoteMessage.notification?.title ?? 'Notification';
    const body = remoteMessage.notification?.body ?? '';
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
        pressAction: { id: 'default' },
      },
    });
  });

};
