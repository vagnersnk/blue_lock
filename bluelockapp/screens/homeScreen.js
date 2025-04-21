import React from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      
      <Button title="Iniciar partida" onPress={() => navigation.navigate('Cronometro')} />
      <Button title="Sortear times" onPress={() => navigation.navigate('Sortear_times')} />
    </SafeAreaView>
  );
}

