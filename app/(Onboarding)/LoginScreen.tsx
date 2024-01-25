import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import Icons from '@expo/vector-icons/MaterialIcons'
import PrimaryButton from '../../components/Button'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native'
import { AuthCallout } from '../../components/Button/SignupCallout'
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet'

export default function LoginScreen() {
  const theme = useTheme()
  const dimensions = useWindowDimensions()
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (text: string, value: string) => {
    setFormData({ ...formData, [text]: value })
  }

  const handleSubmit = () => {
    console.log('Email:', formData.email)
    console.log('Password:', formData.password)
    router.push('/(tabs)')
  }

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
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              backgroundColor: theme.colors.card,
            }}
          >
            <View>
              <LottieView
                source={require('../../assets/animations/auth.json')}
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
              />
            </View>
          </View>

          <View style={{ padding: 24 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '800',
                color: theme.colors.text,
              }}
            >
              Welcome Back 👋
            </Text>
            <Text
              style={{
                opacity: 0.5,
                marginTop: 16,
                fontSize: 16,
                color: theme.colors.text,
              }}
            >
              Sign in to your account
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
                  value={formData.password}
                  onChangeText={(text) => handleChange('password', text)}
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
                style={{ width: '100%', paddingVertical: 8, marginTop: 16 }}
              >
                <PrimaryButton
                  label='Login'
                  onPress={handleSubmit}
                  style={{
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <AuthCallout
                  text="Don't have an account?"
                  linkText='Sign Up'
                  route='/(SignUpScreen)'
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
