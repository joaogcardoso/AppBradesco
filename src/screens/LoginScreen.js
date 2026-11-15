import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import CpfInput from '../components/CpfInput';

export default function LoginScreen({ onContinue }) {
  // Estado local para armazenar o CPF digitado
  const [cpf, setCpf] = useState('');

  const handlePressContinue = () => {
    if (cpf.trim().length < 5) {
      Alert.alert('Atenção', 'Por favor, informe um CPF válido.');
      return;
    }
    // Passando o estado do CPF para o componente pai
    onContinue(cpf);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>bradesco <Text style={styles.brandSub}>cartões</Text></Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Para começar, informe seu CPF</Text>

        {/* Instanciando o componente reutilizável */}
        <CpfInput
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          helperText="Somente números"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handlePressContinue}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc092f', // Vermelho institucional inspirado na imagem
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    marginTop: 10,
  },
  brand: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  brandSub: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    lineHeight: 38,
  },
  footer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b2bec3', // Cinza arredondado idêntico ao botão da referência visual
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  buttonText: {
    color: '#2d3436',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
