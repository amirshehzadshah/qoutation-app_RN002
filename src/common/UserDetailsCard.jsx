import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsCard = ({ label, value }) => (
  <View style={styles.Container}>
    <View style={styles.InnerContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  InnerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333333'
  },
  value: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
    textAlign: 'right',
  },
});

export default UserDetailsCard;
