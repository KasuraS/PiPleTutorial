import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Piple from './components/piple-logo.js';
import FirebaseDB from './config.js'

// @flow
export default function App() {
  return (
    <View style={styles.container}>
      <Piple/>
      <FirebaseDB/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
