import React from 'react';
import { TextInput, Text, StyleSheet, View, ScrollView } from 'react-native';

const EditableTextField = ({ value, onChangeText, error, numeric }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {numeric ? (
        <TextInput
          style={[styles.input, error && styles.inputError]}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          maxLength={10}
          placeholder='300000000'
        />
      ) : (
        <TextInput
          style={[styles.input, error && styles.inputError]}
          value={value}
          onChangeText={onChangeText}
        />
      )
      }
      </ScrollView>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default EditableTextField;
