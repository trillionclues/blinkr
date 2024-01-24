import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { Text } from '../../components/Themed'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function OnboardingScreen() {
  const nextButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 50,
          width: 60,
          borderRadius: 30,
          backgroundColor: '#1E7ED4',

          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}
        {...props}
      >
        <Text style={{ color: '#fff' }}>Next</Text>
      </TouchableOpacity>
    )
  }

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 50,
          width: 60,
          borderRadius: 30,
          backgroundColor: '#1E7ED4',
          justifyContent: 'center',
          marginRight: 10,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}
        {...props}
      >
        <Entypo name='check' size={24} color='#fff' />
      </TouchableOpacity>
    )
  }

  const handleDone = () => {
    router.push('/(slider)/AuthSelection')
    // setItem('onboarded', '1')
  }
  return (
    <View style={styles.container}>
      <Onboarding
        showSkip={false}
        onDone={handleDone}
        bottomBarHighlight={false}
        NextButtonComponent={nextButton}
        DoneButtonComponent={doneButton}
        containerStyles={{
          paddingHorizontal: 15,
        }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View>
                <LottieView
                  source={require('../../assets/animations/connect.json')}
                  autoPlay
                  loop
                  style={{ width: 300, height: 300 }}
                />
              </View>
            ),
            title: (
              <Text style={styles.title}>
                Connect, Share and <Text style={styles.boldText}>Blinkr</Text>
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitle}>
                Discover and chat with people within 500m radius without
                revealing your identity.
              </Text>
            ),
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  source={require('../../assets/animations/share.json')}
                  autoPlay
                  loop
                  style={{ width: 300, height: 300 }}
                />
              </View>
            ),
            title: <Text style={styles.title}>Share Messages and Moments</Text>,
            subtitle: (
              <Text style={styles.subtitle}>
                Exchange messages, share moments, and connect with like-minded
                individuals.
              </Text>
            ),
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <LottieView
                  source={require('../../assets/animations/security.json')}
                  autoPlay
                  loop
                  style={{ width: 300, height: 300 }}
                />
              </View>
            ),
            title: (
              <Text style={styles.title}>Stay Connected, Stay Anonymous</Text>
            ),
            subtitle: (
              <Text style={styles.subtitle}>
                Stay connected with your local community while maintaining your
                privacy.
              </Text>
            ),
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1E7ED4',
    fontSize: 30,
  },
  doneButton: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: Platform.OS === 'ios' ? 30 : 0,
    borderBottomLeftRadius: Platform.OS === 'ios' ? 30 : 0,
  },
})
