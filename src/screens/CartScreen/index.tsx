import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,

  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TopBar from '@/components/Topbar';
import {
  getCartItems,
  getTotalAmount,
  addToCart,
  clearCart,
  CartItem,
  decrementFromCart
} from '@/redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const cartItems = useSelector(getCartItems);
  const totalAmount = useSelector(getTotalAmount);

  const handleIncrement = (item: CartItem) => dispatch(addToCart(item));
  const handleDecrement = (item: CartItem) => {
  dispatch(decrementFromCart(item.id));
};

  const handleClearCart = () => {
    Alert.alert(
      t('cart_screen.confirm_clear'),
      t('cart_screen.clear_cart_message'),
      [
        { text: t('cart_screen.cancel'), style: 'cancel' },
        { text: t('cart_screen.yes'), onPress: () => dispatch(clearCart()) },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.quantityRow}>
        <TouchableOpacity style={styles.qtyButton} onPress={() => handleDecrement(item)}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.qtyButton} onPress={() => handleIncrement(item)}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>

      <TopBar />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={
          cartItems.length === 0
            ? { flex: 1, justifyContent: 'center', alignItems: 'center' }
            : undefined
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="cart-outline" size={80} color="#ccc" />
            <Text style={styles.emptyText}>{t('cart_screen.your_cart_is_empty')}</Text>

          </View>
        )}
      />

      {cartItems.length > 0 && (
        <View style={styles.cartFooter}>
          <Text style={styles.totalText}>{t('cart_screen.total')}: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
            <Text style={styles.clearText}>{t('cart_screen.clear_cart')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
