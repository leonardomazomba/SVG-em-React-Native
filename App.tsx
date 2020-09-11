import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

import KingIcon from './src/Imagens/Icons/king';
import DwarfIcon from './src/Imagens/Icons/dwarf';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
      <KingIcon />
      <DwarfIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }  
});