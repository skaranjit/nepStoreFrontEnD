import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the first product.',
    price: 10,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the second product.',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is the third product.',
    price: 30,
    image: 'https://via.placeholder.com/150',
  },
];

const StoreScreen = ({ route, navigation }) => {
  const { storeId } = route.params;

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('Product', { productId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.storeName}>Store {storeId}</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  productList: {
    paddingHorizontal: 20,
  },
  productCard: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default StoreScreen;
