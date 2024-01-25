import {
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
  useColorScheme,
  Pressable,
} from 'react-native'
import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Text } from '../Themed'

export const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
}: {
  onPress?: () => void
  label: string
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
}) => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Pressable
        android_ripple={{ color: 'rgb(0, 122, 255)', borderless: true }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgba(30, 126, 212, 0.5)'
              : 'rgb(0, 122, 255)',
            paddingHorizontal: 32,
            height: 52,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
        // style={}
        onPress={onPress}
      >
        <Text
          style={[
            { fontSize: 20, fontWeight: '600', color: '#fff' },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </ThemeProvider>
  )
}

export default PrimaryButton
