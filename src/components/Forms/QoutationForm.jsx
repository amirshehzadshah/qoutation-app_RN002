import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import TextField from '../../common/TextField';
import Dropdown from '../../common/Dropdown'; // Import the Dropdown component
import { useNavigation } from '@react-navigation/native';

const QoutationForm = () => {

  const navigation = useNavigation();

  const initialValues = {
    name: '',
    country: '', // Added field for dropdown
  };

  const onSubmit = (data) => {
    console.log('Form Values:', data);
    navigation.navigate('NewFormData', { formData: data });
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextField
              label="Name"
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />

            <Dropdown
              label="Country"
              value={values.country}
              onValueChange={handleChange('country')}
            />
            
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSubmit}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    backgroundColor: '#ffffff', // White background for the form
    padding: 20,
    borderRadius: 10, // Optional: rounded corners for the form
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  button: {
    backgroundColor: '#007BFF',
    // padding: 10,
    // marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default QoutationForm;
