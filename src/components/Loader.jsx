import React from 'react';
import { StyleSheet } from 'react-native';
import PopUpAnimation from '../common/PopUpAnimation';

const Loader = () => <PopUpAnimation style={styles.Loader} source={require('../../assets/lottie/Loader.json')} />

const styles = StyleSheet.create({
  Loader: {
    flex: 1,
  },
});

export default Loader;
