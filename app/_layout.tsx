import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { useAuth } from '../hooks/useAuth'
export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'Onboarding',
}
const isAuthenticated = true

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/Nunito-Variable.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  // if (!isAuthenticated) {
  //   return <OnboardingScreen />
  // }
  return <RootLayoutNav />
}

// Onboarding screen
function OnboardingScreen() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
      <Stack.Screen name='(Onboarding)' options={{ headerShown: false }} />
    </Stack>
  )
}

// root nav with tabs
function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='modal'
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}
