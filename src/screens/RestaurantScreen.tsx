// src/screens/RestaurantScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Feather } from '@expo/vector-icons';
import MenuList from '../components/screens/restaurant/MenuList';

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

export default function RestaurantScreen({ route, navigation }: Props) {
  const { id, name } = route.params;
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Header Info */}
      <View style={styles.header}>
        <View>
          <Text style={styles.restaurantName}>{name}</Text>
          <View style={styles.infoRow}>
            <Feather name="star" size={16} color="#ffd700" />
            <Text style={styles.infoText}>4.5</Text>
            <Feather name="clock" size={16} color="#666" style={styles.infoIcon} />
            <Text style={styles.infoText}>20-30 min</Text>
            <Feather name="map-pin" size={16} color="#666" style={styles.infoIcon} />
            <Text style={styles.infoText}>2.5 km</Text>
          </View>
        </View>
      </View>

      {/* Menu List */}
      <MenuList 
        onAddToCart={(item) => {
          setCartCount(prev => prev + 1);
          // Qui implementeremo l'aggiunta al carrello con Redux
        }}
      />

      {/* Cart Button */}
      {cartCount > 0 && (
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Feather name="shopping-cart" size={24} color="white" />
          <Text style={styles.cartButtonText}>
            Visualizza Carrello ({cartCount})
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 4,
    color: '#666',
  },
  infoIcon: {
    marginLeft: 16,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ff4757',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});