import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
      <TextInput placeholder="Massa"
      keyboardType="numeric" 
      style={styles.input}/>
      <TextInput placeholder="Altura" 
      keyboardType="numeric"
      style={styles.input}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() =>{}}><Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}></Text>
      <Text style={[styles.resultado, {fontSize: 35}]}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  entradas: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: "#89ffa5"
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: "lightgrey",
    fontSize: 65,
    padding: 15,
  }
});
