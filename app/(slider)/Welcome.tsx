import React from 'react'
import {
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native'
import { Text, View } from '../../components/Themed'
import { router } from 'expo-router'

const window = Dimensions.get('window')
const imageHeight = window.height * 0.4
const imageWidth = window.width * 0.8

export default function Welcome() {
  const handlePress = () => {
    router.push('/AuthSelection')
  }

  return (
    <View>
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/Paws.png')}
          style={styles.topImage}
        />
        <Text style={{ fontWeight: '500', fontSize: 23 }}>
          Connect, Share and Blinkr
        </Text>
        <Text style={{ color: '#1E7ED4', fontSize: 18, fontWeight: '500' }}>
          Anytime, Anywhere!
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.activeSlideIndicator}></View>

        <Pressable
          style={{
            backgroundColor: '#1E7ED4',
            borderRadius: 50,
            marginBottom: 10,
            paddingHorizontal: 120,
            paddingVertical: 18,
          }}
          onPress={handlePress}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>
            Get Started
          </Text>
        </Pressable>

        <Text style={{ color: '#737373', fontSize: 14 }}>
          Terms and Privacy Policy
        </Text>
      </View>
      <StatusBar barStyle='default' />
    </View>
  )
}

const styles = StyleSheet.create({
  topSection: {
    marginTop: Platform.OS === 'android' ? StatusBar?.currentHeight : 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    height: imageHeight,
    width: imageWidth,
    resizeMode: 'cover',
  },

  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#191919',
    textAlign: 'center',
    lineHeight: 40,
  },
  paragraphText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#737373',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  activeSlideIndicator: {
    width: 50,
    height: 10,
    backgroundColor: '#1E7ED4',
    borderRadius: 5,
    marginVertical: 40,
  },
})
