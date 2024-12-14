// src/components/screens/home/RestaurantList.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const restaurants = [
  {
    id: '1',
    name: 'Pizza Express',
    image: require('../../../../assets/logo-lr-food-delivery.png'),
    rating: 4.5,
    deliveryTime: '20-30 min',
    minOrder: '15€',
    category: 'Italiana'
  },
  {
    id: '2',
    name: 'Sushi Master',
    image: require('../../../../assets/logo-lr-food-delivery.png'),
    rating: 4.8,
    deliveryTime: '25-35 min',
    minOrder: '20€',
    category: 'Giapponese'
  },
  // Aggiungi altri ristoranti come esempio
];

type Props = {
  onSelectRestaurant: (id: string, name: string) => void;
};

export default function RestaurantList({ onSelectRestaurant }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ristoranti</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.restaurantCard}
            onPress={() => onSelectRestaurant(item.id, item.name)}
          >
            <Image source={item.image} style={styles.restaurantImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <View style={styles.details}>
                <View style={styles.detailItem}>
                  <Feather name="star" size={16} color="#ffd700" />
                  <Text style={styles.detailText}>{item.rating}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Feather name="clock" size={16} color="#666" />
                  <Text style={styles.detailText}>{item.deliveryTime}</Text>
                </View>
                <Text style={styles.minOrder}>Min. {item.minOrder}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  category: {
    color: '#666',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    marginLeft: 4,
    color: '#666',
  },
  minOrder: {
    color: '#666',
  },
});