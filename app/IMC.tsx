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

  // useEffect que executa sempre que o valor do IMC mudar
  useEffect(() => {
    if (imc !== null) {
      console.log(`IMC calculado: ${imc}`);
      // Aqui você pode disparar outras ações que precisam do novo IMC
    }
  }, [imc]); // <-- depende da variável 'imc'

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
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
  
});
