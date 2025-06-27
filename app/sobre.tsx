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
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#eafaf1',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#2e7d32',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4e4e4e',
    lineHeight: 26,
    paddingHorizontal: 10,
  },
});

