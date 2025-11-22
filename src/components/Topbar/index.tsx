import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { getCartItems } from '@/redux/slices/cartSlice';
import { getUnreadCount } from '@/redux/slices/notificationSlice';
import { getUser } from '@/redux/slices/userSlice';
import { Paths } from '@/navigation/paths';

const TopBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { t } = useTranslation();
  const homePage = route.name === Paths.LandingPage;

  const cartCount = useSelector(getCartItems).length;
  const unreadNotifications = useSelector(getUnreadCount);
  const user = useSelector(getUser);

  const routeDisplayName: Record<string, string> = {
    [Paths.LandingPage]: t('landing_page.add_to_cart'),
    [Paths.Cart]: t('cart_screen.clear_cart'),
    [Paths.Notification]: t('notification_screen.mark_all_read'),
    [Paths.Settings]: t('settings_screen.logout'),
  };

  return (
    <View style={styles.topBar}>  
      {/* Top row: User Info + Icons */}
      <View style={styles.userIconRow}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user?.name || ''}</Text>
          <Text style={styles.userEmail}>{user?.email || ''}</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate(Paths.Notification)}
          >
            <Icon name="notifications-outline" size={28} color="#fff" />
            {unreadNotifications > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadNotifications}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate(Paths.Cart)}
          >
            <Icon name="cart-outline" size={28} color="#fff" />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate(Paths.Settings)}
          >
            <Icon name="settings-outline" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

       
        {/* Back to Home Button */}
        {!homePage && (
             <View style={styles.bottomRow}>
            <Text style={styles.routeNameText}>
          {routeDisplayName[route.name] || route.name}
        </Text>
          <TouchableOpacity
            style={styles.backButtonRight}
            onPress={() => navigation.navigate(Paths.LandingPage)}
          >
            <Text style={styles.backText}>Back to Home</Text>
          </TouchableOpacity>
          </View>
        )}
      </View>
  );
};

export default TopBar;
