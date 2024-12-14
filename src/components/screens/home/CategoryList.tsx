// src/components/screens/home/CategoryList.tsx
import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

type Category = {
  id: string;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: '1', name: 'Pizza', image: '🍕' },
  { id: '2', name: 'Hamburger', image: '🍔' },
  { id: '3', name: 'Sushi', image: '🍱' },
  { id: '4', name: 'Insalate', image: '🥗' },
  { id: '5', name: 'Dolci', image: '🍰' },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorie</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryItem}
            onPress={() => console.log(`Selected category: ${category.name}`)}
          >
            <Text style={styles.categoryEmoji}>{category.image}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollContent: {
    paddingRight: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    width: 80,
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
  },
});