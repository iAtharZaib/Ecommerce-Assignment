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
const NotificationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const notifications = useSelector(getNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    dispatch(markAllRead());
  };

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={item.read}
      onPress={() => dispatch(markNotificationRead(item.id))}
      style={styles.notificationCard}
    >
      <View style={styles.iconWrapper}>
        <Icon color="#4F46E5" name="notifications-outline" size={24} />
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.body}</Text>
        <Text style={styles.time}>
          {item.date}
        </Text>
      </View>

      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {unreadCount > 0 && (
        <TouchableOpacity
          onPress={handleMarkAllRead}
          style={styles.unreadstyles}
        >
          <Text style={styles.unreadColor}>
            {t('notification_screen.mark_all_read')}
          </Text>
        </TouchableOpacity>
      )}
        <View style={styles.emptyView} />
        
      <FlatList
        data={notifications}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={
          notifications.length === 0
            ? styles.emptyNotifications
            : undefined
        }
        ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
        <Icon name="notifications-outline" size={80} color="#ccc" />
        <Text style={styles.emptyText}>{t('notification_screen.no_notifications')}</Text>
        </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;
