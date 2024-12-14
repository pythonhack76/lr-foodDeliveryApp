// src/components/screens/home/RestaurantList.tsx
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  minOrder: string;
  cuisine: string;
};

type Props = {
  onSelectRestaurant: (id: string, name: string) => void;
};

const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizzeria da Luigi',
    image: '🍕',
    rating: 4.5,
    deliveryTime: '20-30 min',
    minOrder: '15€',
    cuisine: 'Italiana'
  },
  {
    id: '2',
    name: 'Sushi House',
    image: '🍱',
    rating: 4.7,
    deliveryTime: '25-35 min',
    minOrder: '20€',
    cuisine: 'Giapponese'
  },
  {
    id: '3',
    name: 'Burger King',
    image: '🍔',
    rating: 4.2,
    deliveryTime: '15-25 min',
    minOrder: '10€',
    cuisine: 'Fast Food'
  },
];

export default function RestaurantList({ onSelectRestaurant }: Props) {
  const renderRestaurant = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity 
      style={styles.restaurantCard}
      onPress={() => onSelectRestaurant(item.id, item.name)}
    >
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantEmoji}>{item.image}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <Text style={styles.cuisine}>{item.cuisine}</Text>
          <View style={styles.details}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.deliveryTime}>🕒 {item.deliveryTime}</Text>
            <Text style={styles.minOrder}>Min. {item.minOrder}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ristoranti</Text>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  restaurantCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantEmoji: {
    fontSize: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cuisine: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 14,
  },
  deliveryTime: {
    fontSize: 14,
  },
  minOrder: {
    fontSize: 14,
  },
});