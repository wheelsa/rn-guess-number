import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View styles={styles.screen} >
      <Header title="Guess a Number" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
//occup full screen as root element
