import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FormSectionHeader = () => {
    return (
        <TouchableOpacity
            onPress={() => setActiveSection(activeSection === 1 ? 1 : 1)} // Toggle Section 1
            style={styles.sectionHeader}
        >
            <Text style={styles.sectionTitle}>Personal Info</Text>
            <Ionicons name='chevron-down-outline' size={20} style={styles.sectionSign} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sectionHeader: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        paddingVertical: 10,
        paddingStart: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionSign: {
        paddingVertical: 10,
        paddingEnd: 10,
    },
})

export default FormSectionHeader
