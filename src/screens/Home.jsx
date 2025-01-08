import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get('window');

export default function Home() {

  const [fontsLoaded] = useFonts({ Poppins_600SemiBold })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.ScreenText}>Welcome to</Text>
      <Image
        source={require('../../assets/orions_v.png')}
        style={[styles.ScreenImage, { width: width, height: height * 0.2 }]}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenText: {
    fontSize: 48,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
  },
});
