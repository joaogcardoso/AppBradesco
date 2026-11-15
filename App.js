import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cpf, setCpf] = useState('');

  const handleContinue = (cpfDigitado) => {
    setCpf(cpfDigitado);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCpf('');
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <HomeScreen cpfUser={cpf} onLogout={handleLogout} />
      ) : (
        <LoginScreen onContinue={handleContinue} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
