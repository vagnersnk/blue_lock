import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen';
import CronometroScreen from './screens/cronometro';
import SortScreen from './screens/sortear_times';
import { colors } from './styles/GlobalStyles';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cronometro" component={CronometroScreen} />
        <Drawer.Screen name="Sortear_times" component={SortScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}