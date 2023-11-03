import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import logo from './fil-logo.png'; // Changed to PNG for React Native compatibility

function TestForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(password);
  }, [password]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <View style={styles.credsHolder}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
        secureTextEntry
      />
      <View style={styles.button}>
        <Button title="Submit" onPress={() => { /* Handle the submit action */ }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  credsHolder: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#202336',
    padding: '5%',
    borderRadius: 10,
  },
  logoContainer: {
    alignItems: 'center',  // This centers the logo horizontally within its container
    marginBottom: 20,
  },
  logo: {
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    margin: '10%',
  },
});

export default TestForm;