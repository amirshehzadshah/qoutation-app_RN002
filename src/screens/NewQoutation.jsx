import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QoutationForm from '../components/Forms/QoutationForm'

const NewQoutation = () => {
  return (
    <View style={styles.container}>
      <Text>NewQoutation</Text>
      <QoutationForm />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default NewQoutation
