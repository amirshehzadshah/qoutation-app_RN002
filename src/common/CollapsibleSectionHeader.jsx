import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CollapsibleSectionHeader = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Ionicons
        name={isActive ? 'chevron-up-outline' : 'chevron-down-outline'}
        size={20}
        style={styles.sectionSign}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default CollapsibleSectionHeader;
