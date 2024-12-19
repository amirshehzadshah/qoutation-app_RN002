import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from './Label'
import TextInput from './TextInput'

const TextField = ({ label, placeholder, value, onChangeText, onBlur }) => {
    return (
        <View>
            <Label label={label} />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
export default TextField
