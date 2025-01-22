import LottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const PopUpAnimation = ({ style, source }) => (
    <View style={styles.PopUpAnimation}>
        <LottieView style={style} source={source} autoPlay loop />
    </View>
);

const styles = StyleSheet.create({
    PopUpAnimation: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default PopUpAnimation;
