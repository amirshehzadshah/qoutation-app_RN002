import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import CollapsibleSectionHeader from '../../common/CollapsibleSectionHeader';
import TextField from '../../common/TextField';
import Dropdown from '../../common/Dropdown';
import { useFormStore } from '../../store/qoutationStore';

const QoutationForm = () => {

  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState();

  const { name, country, setName, setCountry, setFormData } = useFormStore();

  useEffect(() => {
    setActiveSection(1);
  }, []);

  const onSubmit = () => {
    const formData = { name, country };
    console.log('Form Values:', formData);
    setFormData(formData);
    navigation.navigate('NewFormData');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <CollapsibleSectionHeader
          title="Personal Info"
          isActive={activeSection === 1}
          onPress={() => setActiveSection(activeSection === 1 ? null : 1)}
        />
        <Collapsible collapsed={activeSection !== 1}>
          <View style={styles.sectionContent}>
            <TextField
              label="Name"
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
          </View>
        </Collapsible>

        <CollapsibleSectionHeader
          title="Description"
          isActive={activeSection === 2}
          onPress={() => setActiveSection(activeSection === 2 ? null : 2)}
        />
        <Collapsible collapsed={activeSection !== 2}>
          <View style={styles.sectionContent}>
            <Dropdown
              label="Country"
              value={country}
              onValueChange={setCountry}
            />
          </View>
        </Collapsible>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  sectionContent: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default QoutationForm;
