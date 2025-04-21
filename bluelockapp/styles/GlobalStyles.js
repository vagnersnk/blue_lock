import { View, StyleSheet } from 'react-native';
export const colors = {
    primary: '#1E1E2E',
    secondary: '#00BFFF',
    background: '#F5F5F5',
    white: '#FFFFFF',
    gray: '#AAAAAA',
  };
  
  export const textStyles = {
    drawerLabel: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  };
  
  export const drawerStyles = {
    drawerStyle: {
      backgroundColor: colors.primary,
      width: 240,
    },
    drawerLabelStyle: textStyles.drawerLabel,
    drawerActiveTintColor: colors.secondary,
    drawerInactiveTintColor: colors.gray,
  };

