import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  state = {
    email: '',
    password: '',
  }

  return (
    <View style={styles.container}>
      <Text>Olá bebê!</Text>

      <TextInput 
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />

      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha"
        value={this.state.senha}
        onChangeText={senha => this.setState({ senha })}
      />
      
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
