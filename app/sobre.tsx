import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>
       Este app foi desenvolvido para calcular o IMC e para mostrarmos na prática o que aprendemos, assim podemos desenvolver mais nossas habilidades e, claro, para que o professor não “taque seu laque” na gente.
    </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'green',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
