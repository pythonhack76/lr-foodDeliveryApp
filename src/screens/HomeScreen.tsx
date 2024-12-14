import React, { useState } from 'react';  // Aggiungi useState qui
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import CategoryList from '../components/screens/home/CategoryList';
import RestaurantList from '../components/screens/home/RestaurantList';
import SearchBar from '../components/common/SearchBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo-lr-food-delivery.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Food Delivery App</Text>
      </View>
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <CategoryList />
      <RestaurantList 
        onSelectRestaurant={(id, name) => {
          navigation.navigate('Restaurant', { id, name });
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});