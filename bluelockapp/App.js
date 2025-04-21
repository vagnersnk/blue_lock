import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen';
import CronometroScreen from './screens/cronometro';
import SortScreen from './screens/sortear_times';
import { View, StyleSheet } from 'react-native';




// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}> 
    <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cronometro" component={CronometroScreen} />
        <Drawer.Screen name="Sortear_times" component={SortScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
  );
}


// Estilo global
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1a1a', // Cor de fundo
  },
});