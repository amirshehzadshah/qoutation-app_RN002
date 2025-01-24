import React from 'react'
import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import QoutationForm from '../components/Forms/QoutationForm'
import ScreenLayout from '../layouts/ScreenLayout';

const QoutationRequestForm = () => {

  const { width } = useWindowDimensions();

  return (
    <ScreenLayout>
      <Text style={[styles.title, { fontSize: width * 0.08 }]}>Quotation Request</Text>

      <View style={styles.formWrapper}>
        <QoutationForm />
      </View>

      <StatusBar style="auto" />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#1f2b64',
    marginVertical: 20,
    textAlign: 'center',
  },
  formWrapper: {
    alignItems: 'center',
  }
})

export default QoutationRequestForm
