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

  const cartItems = useSelector(getCartItems);
  const totalAmount = useSelector(getTotalAmount);

  const handleIncrement = (item: CartItem) => dispatch(addToCart(item));
  const handleDecrement = (item: CartItem) => {
  dispatch(decrementFromCart(item.id));
};

  const handleClearCart = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to clear the cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => dispatch(clearCart()) },
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
            <Text style={styles.emptyText}>Your cart is empty</Text>

          </View>
        )}
      />

      {cartItems.length > 0 && (
        <View style={styles.cartFooter}>
          <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
