import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function WelcomeLayout() {
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='AuthSelection' options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
