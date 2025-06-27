import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ImcScreen() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState<number | null>(null);

  const calcularIMC = () => {
    const alt = parseFloat(altura);
    const pes = parseFloat(peso);
    if (alt > 0 && pes > 0) {
      const resultado = pes / (alt * alt);
      setImc(Number(resultado.toFixed(2)));
    }
  };

  useEffect(() => {
    if (imc !== null) {
      console.log(`IMC calculado: ${imc}`);
    }
  }, [imc]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu IMC</Text>
      </View>

      <Text style={styles.title}>Informe seus dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Altura (ex: 1.75) use ponto!"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (ex: 70)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {imc && (
        <Text style={styles.resultado}>
          Seu IMC é: <Text style={{ fontWeight: 'bold' }}>{imc}</Text>
        </Text>
      )}
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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
    color: 'green',
    marginTop: 200,
  },

  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#a3d9a5',
    color: 'grey',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

  resultado: {
    marginTop: 40,
    fontSize: 20,
    color: '#2e7d32',
    textAlign: 'center',
    backgroundColor: '#e6f4ea',
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 20,
    elevation: 5,
    width: 300,
    alignSelf: 'center',
  },
});
