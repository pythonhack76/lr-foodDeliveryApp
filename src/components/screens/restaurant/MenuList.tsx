// src/components/screens/restaurant/MenuList.tsx
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  category: string;
};

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita',
    description: 'Pomodoro, mozzarella, basilico',
    price: '8.50€',
    image: require('../../../../assets/logo-lr-food-delivery.png'),
    category: 'Pizza'
  },
  {
    id: '2',
    name: 'Diavola',
    description: 'Pomodoro, mozzarella, salame piccante',
    price: '10.00€',
    image: require('../../../../assets/logo-lr-food-delivery.png'),
    category: 'Pizza'
  },
  // Aggiungi altri piatti
];

type Props = {
  onAddToCart: (item: MenuItem) => void;
};

export default function MenuList({ onAddToCart }: Props) {
  return (
    <FlatList
      data={menuItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.menuItem}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => onAddToCart(item)}
              >
                <Feather name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDescription: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#ff4757',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});