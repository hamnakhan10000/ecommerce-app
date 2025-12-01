import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProductScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to Cart')} color="#1ABC9C"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#2C3E50' },
  name: { fontSize: 24, color: '#ECF0F1', fontWeight:'bold', marginBottom:10 },
  price: { fontSize: 20, color: '#BDC3C7', marginBottom:20 },
});

