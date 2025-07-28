import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const stores = [
  {
    id: '1',
    name: 'Grocery Store',
    description: 'Fresh groceries delivered to your door.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    name: 'Restaurant',
    description: 'Delicious meals from your favorite local restaurant.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    name: 'Pharmacy',
    description: 'Get your prescriptions and health products delivered.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderStore = ({ item }) => (
    <TouchableOpacity
      style={styles.storeCard}
      onPress={() => navigation.navigate('Store', { storeId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.storeImage} />
      <Text style={styles.storeName}>{item.name}</Text>
      <Text style={styles.storeDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        renderItem={renderStore}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.storeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storeList: {
    padding: 20,
  },
  storeCard: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  storeImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  storeDescription: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
