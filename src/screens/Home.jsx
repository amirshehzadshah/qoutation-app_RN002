import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import ProfilePic from '../components/ProfilePic';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// const { width, height } = Dimensions.get('window');

export default function Home() {

  const [fontsLoaded] = useFonts({ Poppins_600SemiBold })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderTextContainer}>
          <Text style={styles.HeaderText}>Hello !</Text>
          <Text style={styles.HeaderText}>Mirza Hamza Shoaib Baig</Text>
        </View>
        <ProfilePic />
      </View>
      <View style={styles.MainContainer}>
        {/* <Text style={styles.MainText}>Welcome to</Text>
        <View style={styles.ImageContainer}>
          <Image
            source={require('../../assets/images/logo1.png')}
            style={styles.MainImage}
            resizeMode='contain'
          />
        </View> */}
        <View>
          <Text style={styles.MainHeading}>Recent</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
  HeaderContainer: {
    paddingTop: 24,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2
  },
  HeaderTextContainer: {
    justifyContent: 'flex-start',
  },
  HeaderText: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
  },
  MainContainer: {
    marginTop: 12,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#b4b8e7'
    // borderWidth: 2
  },
  // MainText: {
  //   fontSize: 48,
  //   fontFamily: 'Poppins_600SemiBold',
  //   color: '#333333',
  // },
  // ImageContainer: {
  //   borderColor: '#e0a705',
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   overflow: 'hidden'
  // },
  // MainImage: {
  //   height: height * 0.1,
  //   width: width * 0.95,
  //   // borderWidth: 2,
  // },
  MainHeading: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333333',
  },
});
