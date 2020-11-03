import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  state = {
    email: '',
    password: '',
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />

      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha"
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
