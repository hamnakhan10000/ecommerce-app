import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Shoes', price: 50 },
  { id: 2, name: 'Bag', price: 30 },
  { id: 3, name: 'Watch', price: 100 },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to E-Commerce App</Text>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onPress={() => navigation.navigate('Product', { product: item })}
        />
      ))}
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} color="#1ABC9C"/>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} color="#3498DB"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#2C3E50', padding: 10 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ECF0F1',
    textAlign: 'center',
    marginVertical: 10,
  },
});
