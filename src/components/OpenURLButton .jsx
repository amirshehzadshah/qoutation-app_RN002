import { Linking, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useCallback } from 'react';

const OpenURLButton = ({ url, children }) => {
  
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.textButton}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default OpenURLButton;
