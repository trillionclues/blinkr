import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import WelcomeLayout from './(slider)/_layout'
export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'Onboarding',
}
const isAuthenticated = false

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// if (!isAuthenticated) {
//   // If the user is not authenticated, show the welcome screen.
//   // Onboarding screens
//   function OnboardingScreen() {
//     const colorScheme = useColorScheme()
//     return (
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name='Onboarding' options={{ headerShown: false }} />
//         </Stack>
//       </ThemeProvider>
//     )
//   }
// } else {
//   function RootLayoutNav() {
//     const colorScheme = useColorScheme()
//     return (
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack screenOptions={{ headerShown: false }}>
//           <Stack.Screen name='(slider)' options={{ headerShown: false }} />
//         </Stack>
//       </ThemeProvider>
//     )
//   }
// }

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

  if (!isAuthenticated) {
    return <OnboardingScreen />
  }
  return <RootLayoutNav />
}

// welcome slider
// function WelcomeSlider() {
//   const colorScheme = useColorScheme()
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name='(slider)' options={{ headerShown: false }} />
//         <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
//       </Stack>
//     </ThemeProvider>
//   )
// }

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
  const colorScheme = useColorScheme()
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
    </Stack>
  )
}
