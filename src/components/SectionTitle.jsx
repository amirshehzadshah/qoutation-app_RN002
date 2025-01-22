import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2b64',
  },
});

export default SectionTitle;
