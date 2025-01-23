import { StatusBar } from 'expo-status-bar';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import ProfilePic from '../components/ProfilePic';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../layouts/ScreenLayout';
import HorizontalWrapper from '../layouts/HorizontalWrapper';
import useUserStore from '../store/useUserStore';
import { useEffect, useState } from 'react';

export default function Home() {

  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { user } = useUserStore()

  const userDetails = () => navigation.navigate('UserDetails');

  const [fontsLoaded] = useFonts({ Poppins_600SemiBold })
  const [translateY] = useState(new Animated.Value(windowHeight));

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScreenLayout>
      <HorizontalWrapper>
        <View style={styles.greetingWrapper}>
          <Text style={[styles.greetingText, { fontSize: windowWidth * 0.06 }]}>Hello !</Text>
          <Text style={[styles.greetingText, { fontSize: windowWidth * 0.06 }]}>{user.name}</Text>
        </View>
        <TouchableOpacity onPress={userDetails} style={styles.greetingWrapper}>
          <ProfilePic />
        </TouchableOpacity>
      </HorizontalWrapper>

      <Animated.View style={[styles.infoContainer, { transform: [{ translateY }] }]}>
        <Text style={[styles.infoTitle, { fontSize: windowWidth * 0.12 }]}>Welcome to</Text>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/logo2.png')}
            style={[styles.logo, { height: windowHeight * 0.2, width: windowWidth * 0.8, }]}
            resizeMode='contain'
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Orions Lifts (SMC-Private) Limited is a leading provider of elevators, escalators, travelators, and moving walkways. With a strong emphasis on quality and innovation, we specialize in manufacturing, sales, installation, and parts.
          </Text>
        </View>
      </Animated.View>
      <StatusBar style="auto" />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  greetingWrapper: {
    marginTop: 40,
  },
  greetingText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
  },
  infoContainer: {
    flex: 1,
    marginTop: 12,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#b4b8e7',
    alignItems: 'center',
  },
  infoTitle: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
    textAlign: 'center'
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  logo: {},
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 22,
  },
});
