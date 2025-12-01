import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.text}>Name: Hamna Khan</Text>
      <Text style={styles.text}>Email: hamnakhan10000@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#2C3E50' },
  title: { fontSize:24, color:'#ECF0F1', fontWeight:'bold', marginBottom:10 },
  text: { fontSize:16, color:'#BDC3C7', marginBottom:5 }
});
