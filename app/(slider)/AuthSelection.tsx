import React from 'react'
import { StyleSheet, Pressable, Image } from 'react-native'
import { router } from 'expo-router'
import { Text, View } from '../../components/Themed'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import LottieView from 'lottie-react-native'

export default function AuthSelection() {
  const handlePhoneLogin = () => {
    // router.push('/(slider)/EnterDetails')
  }

  const handleGoogleLogin = () => {
    // Perform Google login logic or navigate to Google login screen
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',
            alignSelf: 'center',
            width: 300,
            height: 300,
            marginBottom: 20,
          }}
        >
          <LottieView
            source={require('../../assets/animations/auth.json')}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Choose Your Login Method</Text>

          <TouchableOpacity
            style={styles.optionContainer}
            onPress={handlePhoneLogin}
          >
            <Text style={styles.optionText}>Login with Phone</Text>
            <Entypo name='phone' size={24} color='#1E7ED4' />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionContainer}
            onPress={handleGoogleLogin}
          >
            <Text style={styles.optionText}>Login with Google</Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/24/000000/google-logo.png',
              }}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 2,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    color: '#1E7ED4',
  },
  buttonIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
})
