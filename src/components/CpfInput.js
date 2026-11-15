import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function CpfInput({ value, onChangeText, placeholder, helperText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#f2b2b2"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={14}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    color: '#fff',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 6,
  },
  helperText: {
    color: '#f8d7da',
    fontSize: 12,
    marginTop: 6,
  },
});
