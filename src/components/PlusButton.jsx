import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PlusButton = () => {
    const navigation = useNavigation();

    const addNewQoutation = () => navigation.navigate('NewQoutation');

    return (
        <TouchableOpacity style={styles.button}
            onPress={addNewQoutation}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 60, // size of the button
        height: 60, // size of the button
        borderRadius: 30, // to make the button circular
        backgroundColor: '#007BFF', // background color of the button
        justifyContent: 'center', // center the content vertically
        alignItems: 'center', // center the content horizontally
    },
    buttonText: {
        fontSize: 30, // size of the "+" sign
        color: 'white', // color of the text
        fontWeight: 'bold', // bold text
    },
});

export default PlusButton;