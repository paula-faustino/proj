import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sobre o Aplicativo</Text>
        <Text style={styles.text}>
          Este app foi desenvolvido para calcular o IMC e para mostrarmos na prática o que aprendemos, 
          assim podemos desenvolver mais nossas habilidades e, claro, para que o professor não “jogue seu laque” na gente.
        </Text>

        <Text style={styles.textExtra}>
          Além disso, a construção do app nos ajuda a consolidar conhecimentos em React Native, navegação, 
          componentes, estilização e boas práticas no desenvolvimento de interfaces móveis.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  content: {
    padding: 30,
  },

  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#2e7d32',
  },

  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#2e7d32',
    lineHeight: 24,
    width: 500,
    alignSelf: 'center',
  },

  textExtra: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2e7d32',
    lineHeight: 24,
    width: 500,
    alignSelf: 'center',
  },
});
