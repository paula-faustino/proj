import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (ex: 1.75)"
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
      <Button title="Calcular IMC" onPress={calcularIMC} />
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
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f7fdfc', // cor de fundo mais clean
  padding: 20,
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'lightgreen',
  },

  input: {
  width: '100%',
  borderWidth: 1,
  borderColor: '#a3d9a5',
  borderRadius: 25,
  paddingVertical: 15,
  paddingHorizontal: 20,
  marginBottom: 15,
  backgroundColor: '#fff',
  shadowRadius: 2,
},
  button: {
    backgroundColor: '#4CAF50', // cor verde mais suave
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },


  buttonText: {
    color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
  },
  
  resultado: {
  marginTop: 40,
  fontSize: 20,
  color: '#2e7d32',
  textAlign: 'center',
  backgroundColor: '#e6f4ea',
  padding: 15,
  borderRadius: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
}});