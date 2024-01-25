import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function OnboardingLayout() {
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='index'
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' options={{ headerShown: false }} />
        <Stack.Screen name='SignUpScreen' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
