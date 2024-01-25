import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native'
import Icons from '@expo/vector-icons/MaterialIcons'
import PrimaryButton from '../../components/Button'
import { router } from 'expo-router'
import { AuthCallout } from '../../components/Button/SignupCallout'
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet'
import { useTheme } from '@react-navigation/native'

export default function SignupScreen() {
  const theme = useTheme()
  const dimensions = useWindowDimensions()
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    password: '',
  })

  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSignup = () => {
    console.log('Form Data:', formData)
    console.log('Agree to Terms:', agreeToTerms)
    // Implement signup logic here
  }

  // const validatePhoneNumber = () => {
  //   // Check if empty
  //   if (!phoneNumber) {
  //     setErrorMessage('Please enter a phone number')
  //     return
  //   }

  // Check if valid format for nigerian numbers or international USA numbers/^(?:(?:\+|00)234|0)?[789]\d{9}$/
  //   const phoneNumberRegex =
  //     /^(?:(?:\+|00)234|0)?[789]\d{9}$/ || /^\+[0-9]{11}$/
  //   if (!phoneNumberRegex.test(phoneNumber)) {
  //     setErrorMessage('Please enter a valid phone number')
  //     return false
  //   }

  //   setErrorMessage('')
  //   return true
  // }

  // const handleLoginPress = () => {
  //   if (validatePhoneNumber()) {
  //     console.log('Phone number sent to backend...')
  //     router.push('/(tabs)')
  //   }
  // }

  return (
    <KeyboardAvoidingView behavior='position' style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.card,
            minHeight: dimensions.height,
          }}
        >
          <View
            style={{
              paddingHorizontal: 24,
              height: 52,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
              <Icons name='arrow-back-ios' size={24} color='#333' />
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/people.png')}
              style={{
                width: '100%',
                height: 300,
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 10,
                resizeMode: 'cover',
              }}
            />
          </View>

          <View style={{ padding: 24 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '800',
                color: theme.colors.text,
              }}
            >
              Let's Get Started
            </Text>
            <Text
              style={{
                opacity: 0.5,
                marginTop: 16,
                fontSize: 16,
                color: theme.colors.text,
              }}
            >
              To register for an account, kindly enter your details.
            </Text>

            {/* error message */}
            {errorMessage && (
              <Text
                style={{
                  color: theme.colors.notification,
                  alignSelf: 'center',
                }}
              >
                {errorMessage}
              </Text>
            )}

            <View style={{ alignItems: 'center', gap: 16, marginTop: 32 }}>
              <View style={{ position: 'relative', width: '100%' }}>
                <TextInput
                  placeholder='Your Phone Number'
                  onChangeText={(text) => handleChange('phoneNumber', text)}
                  value={formData.phoneNumber}
                  keyboardType='phone-pad'
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: theme.colors.text,
                    paddingLeft: 48,
                    paddingRight: 12,
                    height: 48,
                    borderRadius: 50,
                    backgroundColor: theme.colors.background,
                    width: '100%',
                  }}
                />
                <Icons
                  name='phone'
                  size={24}
                  color={theme.colors.text}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: 12,
                    opacity: 0.5,
                  }}
                />
              </View>
              <View style={{ position: 'relative', width: '100%' }}>
                <TextInput
                  placeholder='Your Email'
                  onChangeText={(text) => handleChange('email', text)}
                  value={formData.email}
                  autoCapitalize='none'
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: theme.colors.text,
                    paddingLeft: 48,
                    paddingRight: 12,
                    height: 48,
                    borderRadius: 50,
                    backgroundColor: theme.colors.background,
                    width: '100%',
                  }}
                />
                <Icons
                  name='email'
                  size={24}
                  color={theme.colors.text}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: 12,
                    opacity: 0.5,
                  }}
                />
              </View>
              <View style={{ position: 'relative', width: '100%' }}>
                <TextInput
                  placeholder='Your Password'
                  onChangeText={(text) => handleChange('password', text)}
                  value={formData.password}
                  secureTextEntry
                  autoCapitalize='none'
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: theme.colors.text,
                    paddingLeft: 48,
                    paddingRight: 12,
                    height: 48,
                    borderRadius: 50,
                    backgroundColor: theme.colors.background,
                    width: '100%',
                  }}
                />
                <Icons
                  name='lock'
                  size={24}
                  color={theme.colors.text}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: 12,
                    opacity: 0.5,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 16,
                }}
              >
                {/* <CheckBox
                  value={agreeToTerms}
                  onValueChange={() => setAgreeToTerms(!agreeToTerms)}
                /> */}
                <Text style={{ marginLeft: 8, color: theme.colors.primary }}>
                  I agree to the Terms and Conditions
                </Text>
              </View>

              <View
                style={{ width: '100%', paddingVertical: 8, marginTop: 16 }}
              >
                <PrimaryButton
                  label='Sign Up'
                  onPress={handleSignup}
                  style={{
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />

                <AuthCallout
                  text='Already have an account?'
                  linkText='Sign In'
                  route='/LoginScreen'
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
