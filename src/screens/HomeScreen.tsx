// src/screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import CategoryList from '../components/screens/home/CategoryList';
import RestaurantList from '../components/screens/home/RestaurantList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo-lr-food-delivery.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Food test Delivery App</Text>
        </View>
        <CategoryList />
        <RestaurantList 
          onSelectRestaurant={(id, name) => 
            navigation.navigate('Restaurant', { id, name })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});