
import { View, Text,TextInput, StyleSheet,Button } from 'react-native';
import React, { useState } from 'react';
// Tela de sorteio dos time
export default function SortScreen() {
    const [times, setTimes] = useState('');
    const [jogadores, setJogadores] = useState('');
  
    const handleSortear = () => {
      console.log('Quantidade de times:', times);
      console.log('Lista de jogadores:', jogadores);
      
      
    };
  
    return (
      <View>
        <Text>Quantidade de times:</Text>
        <TextInput
          keyboardType="numeric"
          value={times}
          onChangeText={setTimes}
          placeholder="Ex: 2"
        />
  
        <Text>Lista de jogadores:</Text>
        <TextInput
         
          value={jogadores}
          onChangeText={setJogadores}
          placeholder="Ex: Arthur, João, Pedro"
        />
  
        <Button title="Sortear" onPress={handleSortear} />
      </View>
    );
  }
  
 