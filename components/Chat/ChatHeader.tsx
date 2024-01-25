import React from 'react'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import Icons from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router'
// import { Text, View } from '../Themed'
import { useTheme } from '@react-navigation/native'
import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import { Text } from 'react-native'

export default function ChatHeader() {
  const theme = useTheme()
  return (
    <View
      style={{
        paddingHorizontal: 20,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.22,
        borderBottomColor: theme.dark ? '#ccc' : '#eee',
        backgroundColor: theme.dark ? theme.colors.border : theme.colors.card,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/')}>
          <Icons
            name='arrow-back-ios'
            size={24}
            color={theme.dark ? theme.colors.primary : '#000'}
            style={{ marginRight: 8 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              marginRight: 12,
              borderColor: '#ccc',
              borderWidth: 1,
              resizeMode: 'cover',
            }}
          />
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: theme.colors.text,
              }}
            >
              Sophia Thomas
            </Text>
            <Text style={{ color: '#999', fontSize: 14 }}>Online</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log('pressed')
          }}
        >
          <Icons
            name='videocam'
            size={24}
            color={theme.dark ? '#fff' : theme.colors.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('pressed')
          }}
        >
          <Icons
            name='more-vert'
            size={24}
            color={theme.dark ? '#fff' : theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
