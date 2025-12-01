import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert('Button Pressed!', `Count is now ${count + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to E-commerce App!</Text>
      <Text style={{ marginTop: 10 }}>Button pressed {count} times</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
