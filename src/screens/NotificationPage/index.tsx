import React from 'react';
import {
  FlatList,
  I18nManager,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  getNotifications,
  markAllRead,
  markNotificationRead,
  NotificationItem,
} from '@/redux/slices/notificationSlice';

import styles from './styles';
import TopBar from '@/components/Topbar';

const NotificationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const isRTL = I18nManager.isRTL;
  const { t } = useTranslation();

  const notifications = useSelector(getNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    dispatch(markAllRead());
  };

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(markNotificationRead(item.id))}
      style={styles.notificationCard}
    >
      <View style={styles.iconWrapper}>
        <Icon color="#4F46E5" name="notifications-outline" size={24} />
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.description}</Text>
        <Text style={styles.time}>
          {item.date}
        </Text>
      </View>

      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* TOP BAR */}
         <TopBar/>

      {/* MARK ALL READ BUTTON */}
      {unreadCount > 0 && (
        <TouchableOpacity
          onPress={handleMarkAllRead}
          style={{
            alignSelf: isRTL ? 'flex-start' : 'flex-end',
            backgroundColor: '#4F46E5',
            borderRadius: 12,
            margin: 12,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            {t('notification_screen.mark_all_read')}
          </Text>
        </TouchableOpacity>
      )}

      {/* NOTIFICATIONS LIST */}
      <FlatList
        contentContainerStyle={styles.listContent}
        data={notifications}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NotificationScreen;
