import React from 'react';
import { View, StyleSheet } from 'react-native';
import TestForm from './TestForm';

function App() {
  return (
    <View style={styles.app}>
        <TestForm />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "black",
    // Equivalent styles for 'App'
    justifyContent: 'center',
    
  },
  appHeader: {
    // Equivalent styles for 'App-header'
  },
});

export default App;