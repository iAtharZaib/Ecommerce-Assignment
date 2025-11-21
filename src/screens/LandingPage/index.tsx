import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import products from '@/mocks/products.json';
import { getCartItems } from '@/redux/slices/cartSlice';

import styles from './styles';

type LandingScreenProps = {
  readonly userEmail?: string;
  readonly userName?: string;
}

type Product = {
  id: number;
  image: string;
  price: number;
  title: string;
}

// eslint-disable-next-line react/function-component-definition
const LandingScreen: React.FC<LandingScreenProps> = ({
  userEmail = '',
  userName = '',
}) => {
  const cartCount = useSelector(getCartItems).length;
  const allNotifications = useSelector((state: any) => state.notifications.list);
  const unreadNotifications = allNotifications.filter((n: any) => !n.read).length;

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text numberOfLines={2} style={styles.productTitle}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor="#4F46E5"
        barStyle="light-content"
      />

      {/* Top Bar */}
      <View style={[styles.topBar, { paddingTop: StatusBar.currentHeight }]}>
        {/* User Info */}
        <View>
          <Text style={styles.userName}>userName</Text>
          <Text style={styles.userEmail}>userEmail</Text>
        </View>

        {/* Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Icon color="#000" name="notifications-outline" size={28} />
            {unreadNotifications > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadNotifications}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Icon color="#000" name="cart-outline" size={28} />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Icon color="#000" name="settings-outline" size={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Grid */}
      <FlatList
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderProduct}
      />
    </View>
  );
};

export default LandingScreen;
