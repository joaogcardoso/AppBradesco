import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomeScreen({ cpfUser, onLogout }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeTitle}>Bem-vindo ao Sistema!</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>CPF Autenticado (Recebido via Props):</Text>
        <Text style={styles.cpfText}>{cpfUser}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Encerrar Sessão</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dcdde1',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#718093',
    marginBottom: 8,
  },
  cpfText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#cc092f',
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#cc092f',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
