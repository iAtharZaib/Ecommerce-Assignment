import React from 'react';
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import products from '@/mocks/products.json';
import { addToCart } from '@/redux/slices/cartSlice';

import styles from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface LandingScreenProps {
  userName?: string;
  userEmail?: string;
}

// eslint-disable-next-line react/function-component-definition
const LandingScreen: React.FC<LandingScreenProps> = ({
  userEmail = '',
  userName = '',
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text numberOfLines={2} style={styles.productTitle}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => dispatch(addToCart({ ...item, quantity: 1 }))}>
          <Text style={styles.addButtonText}>{t('landing_page.add_to_cart')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>

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
