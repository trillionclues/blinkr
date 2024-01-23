import React from 'react'
import { Pressable } from 'react-native'
import { router } from 'expo-router'
import { Text, View } from '../../components/Themed'

export default function SliderTwoScreen() {
  //navigate back
  const handlePress = () => {
    router.push('/(tabs)')
  }
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      key='2'
    >
      <Text>Welcome to Slide 2</Text>
      <Pressable onPress={handlePress}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  )
}
