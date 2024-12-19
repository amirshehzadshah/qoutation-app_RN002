import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Dropdown = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="USA" value="usa" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="India" value="india" />
        <Picker.Item label="Australia" value="australia" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  // inputContainer: {
  //   marginBottom: 20,
  // },
  // picker: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   padding: 10,
  //   borderRadius: 5,
  //   height: 40,
  // },
});

export default Dropdown;
