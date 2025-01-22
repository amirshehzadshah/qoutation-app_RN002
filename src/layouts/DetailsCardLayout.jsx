import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsCardLayout = ({ children }) => {
    return (
        <View style={styles.Container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 8,
    },
})
export default DetailsCardLayout
