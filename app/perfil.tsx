import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Text style={styles.headerTitle}>Meu Perfil</Text>
</View>

      <Text style={styles.title}>Selecione uma foto de perfil</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Escolher foto de perfil</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },

  header: {
  backgroundColor: 'lightgreen',
  alignItems: 'center',
  justifyContent: 'center',
  height: 150,
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
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
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 40,
    alignSelf: 'center',
     width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
