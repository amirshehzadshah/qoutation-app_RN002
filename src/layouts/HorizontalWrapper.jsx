import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalWrapper = ({ children }) => (
  <View style={styles.Container}>
    <View style={styles.InnerContainer}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  InnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HorizontalWrapper;
