import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, value, onChangeText, onBlur }) => {
  return (
    <View style={styles.inputContainer}>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInput;
