import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Sorteio_geral from '../functions/sort_func';

export default function SortScreen() {
  const [times_qtd, setTimes] = useState('');
  const [jogadores, setJogadores] = useState('');
  const [timesSorteados, setTimesSorteados] = useState([]);

  return (
    <View>
      <Text>Quantidade de times:</Text>
      <TextInput
        keyboardType="numeric"
        value={times_qtd}
        onChangeText={setTimes}
        placeholder="Ex: 2"
      />

      <Text>Lista de jogadores:</Text>
      <TextInput
        value={jogadores}
        onChangeText={setJogadores}
        placeholder="Ex: Arthur, João, Pedro"
      />

      <Button
        title="Sortear"
        onPress={() => {
          const resultado = Sorteio_geral(jogadores, times_qtd);
          setTimesSorteados(resultado); // Atualiza o estado com os times sorteados
        }}
      />

      {timesSorteados.length > 0 && (
        <ScrollView style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Times Sorteados:</Text>
          {timesSorteados.map((time, index) => (
            <Text key={index} style={{ fontSize: 16 }}>
              Time {index + 1}: {time.join(', ')}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
}