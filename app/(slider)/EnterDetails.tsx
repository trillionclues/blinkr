import React, { useState } from 'react'
import { Text, View } from '../../components/Themed'
import { Image, Platform, Pressable, StatusBar, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

export default function WelcomeBack() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (text: string) => {
    setPhoneNumber(text)
    setErrorMessage('')
  }
  const validatePhoneNumber = () => {
    // Check if empty
    if (!phoneNumber) {
      setErrorMessage('Please enter a phone number')
      return
    }

    // Check if valid format for nigerian numbers or international USA numbers/^(?:(?:\+|00)234|0)?[789]\d{9}$/
    const phoneNumberRegex =
      /^(?:(?:\+|00)234|0)?[789]\d{9}$/ || /^\+[0-9]{11}$/
    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number')
      return false
    }

    setErrorMessage('')
    return true
  }

  const handleLoginPress = () => {
    if (validatePhoneNumber()) {
      console.log('Phone number sent to backend...')
      router.push('/(tabs)')
    }
  }
  return (
    <View style={style.container}>
      {/* <Image
        source={require('../../assets/images/location_pin.jpg')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      /> */}
      <Entypo
        name='location-pin'
        size={100}
        color='#1E7ED4'
        style={{
          alignSelf: 'center',
        }}
      />
      <View style={style.headerTextContainer}>
        <Text style={style.headerText}>Welcome Back</Text>
        <Text style={style.headerPara}>Login to your account</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          value={phoneNumber}
          onChangeText={handleChange}
          placeholder='Phone Number'
          style={style.input}
          placeholderTextColor='#737373'
          keyboardType='number-pad'
        />
        <Text style={{ color: 'red', alignSelf: 'center' }}>
          {errorMessage}
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Pressable
          android_ripple={{ color: 'rgba(30, 126, 212, 0.5)' }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgba(30, 126, 212, 0.7)' : '#1E7ED4',
              borderRadius: 50,
              width: '80%',
              height: 50,
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={handleLoginPress}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar?.currentHeight : 50,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 33,
    color: '#1E7ED4',
    marginTop: 10,
    textAlign: 'center',
    letterSpacing: 1,
  },
  headerPara: {
    color: '#737373',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    borderColor: '#1E7ED4',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 12,
    fontSize: 18,
    color: 'black',
    backgroundColor: '#F5F5F5',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
})
