import React from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import products from '@/mocks/products.json';
import styles from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface LandingScreenProps {
  userName: string;
  userEmail: string;
}

const LandingScreen: React.FC<LandingScreenProps> = ({
  userName,
  userEmail,
}) => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text style={styles.productTitle} numberOfLines={2}>
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
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default LandingScreen;
