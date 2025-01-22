import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const EditableDropdown = ({ selectedValue, onValueChange, options }) => {
    return (
        <View style={styles.Container}>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={onValueChange}
            >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    picker: {
        width: '100%',
    },
});

export default EditableDropdown;
