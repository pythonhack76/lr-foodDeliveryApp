// src/components/screens/home/CategoryList.tsx
import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Pizza', icon: 'pie-chart' },
  { id: '2', name: 'Hamburger', icon: 'circle' },
  { id: '3', name: 'Sushi', icon: 'square' },
  { id: '4', name: 'Insalate', icon: 'leaf' },
  { id: '5', name: 'Dessert', icon: 'heart' },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorie</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollView}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryItem}
          >
            <View style={styles.iconContainer}>
              <Feather name={category.icon} size={24} color="#ff4757" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  scrollView: {
    paddingLeft: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#ffecec',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
  },
});