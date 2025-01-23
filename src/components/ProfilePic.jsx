import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import useUserStore from '../store/useUserStore'
import AVATAR from '../../assets/images/avatar.jpg'

const ProfilePic = () => {

  const imageUri = useUserStore((state) => state.user.profileImageUri)

  return (
    <View style={styles.ImageContainer}>
      <Image source={imageUri ? { uri: imageUri } : AVATAR} style={styles.Image} />
    </View>
  )
}

const styles = StyleSheet.create({
    ImageContainer: {
        height: 42,
        width: 42,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#e0a705',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    Image: {
        height: 42,
        width: 42
    }
})

export default ProfilePic
