import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
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

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'lightgreen', dark: 'lightgreen' }}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calculadora de IMC</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.inputGroup}>
        <Text style={styles.label}>Altura (em metros):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          placeholder="Ex: 1.75"
        />
        <Text style={styles.label}>Peso (em kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          placeholder="Ex: 70"
        />
        <Button title="Calcular IMC" onPress={calcularIMC} />
        {imc && (
          <Text style={styles.resultado}>
            Seu IMC é: <Text style={{ fontWeight: 'bold' }}>{imc}</Text>
          </Text>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

   titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  inputGroup: {
    gap: 20,
    paddingHorizontal: 10,
    
  },
  input: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'lightgreen',
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontWeight: '600',
  },
  resultado: {
    marginTop: 16,
    fontSize: 18,
    color: 'green',
  },
  
});
