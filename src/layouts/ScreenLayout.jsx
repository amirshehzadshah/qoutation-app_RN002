import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const ScreenLayout = ({ children }) => {
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
                {children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        marginTop: getStatusBarHeight(),
        paddingHorizontal: 16,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    }
})
export default ScreenLayout

