import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3E4A59',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  name: { color: '#ECF0F1', fontSize: 18, fontWeight: 'bold' },
  price: { color: '#BDC3C7', marginTop: 5 },
});

