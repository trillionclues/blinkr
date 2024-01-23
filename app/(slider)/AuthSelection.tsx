import React from 'react'
import { StyleSheet, Pressable, Image } from 'react-native'
import { router } from 'expo-router'
import { Text, View } from '../../components/Themed'
import { Entypo, MaterialIcons } from '@expo/vector-icons'

export default function AuthSelection() {
  const handlePress = () => {
    router.push('/(slider)/EnterDetails')
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        {/* <Image
          source={require('../../assets/images/location_pin.jpg')}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        /> */}
        <Entypo name='location-pin' size={154} color='#1E7ED4' />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 33,
            color: '#1E7ED4',
            marginTop: 10,
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Blinkr
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          android_ripple={{ color: 'rgba(30, 126, 212, 0.5)' }}
          style={({ pressed }) => [
            styles.connectButton,
            ,
            {
              backgroundColor: '#fff',
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={handlePress}
        >
          <MaterialIcons
            name='call'
            size={24}
            color='#1E7ED4'
            style={styles.buttonIcon}
          />
          <Text style={{ fontSize: 18, color: '#737373' }}>
            Connect with Phone
          </Text>
        </Pressable>

        <Pressable
          android_ripple={{ color: 'rgba(30, 126, 212, 0.5)' }}
          style={({ pressed }) => [
            styles.connectButton,
            ,
            {
              backgroundColor: '#fff',
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={() => {
            console.log('Pressed Google Sign In')
          }}
        >
          <Image
            source={{
              uri: 'https://img.icons8.com/color/24/000000/google-logo.png',
            }}
            style={styles.buttonIcon}
          />
          <Text style={{ fontSize: 18, color: '#737373' }}>
            Connect with Google
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsContainer: {
    width: '80%',
  },
  connectButton: {
    borderRadius: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#1E7ED4',
    shadowColor: '#000',
    borderWidth: 1,
    gap: 10,
  },
  buttonIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
})
