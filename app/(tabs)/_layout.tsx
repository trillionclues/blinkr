import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'

import Colors from '../../constants/Colors'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={25} style={{ marginTop: 5 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // tabBarLabel: () => null,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Discover',
            tabBarIcon: ({ color }) => (
              <Feather name='map-pin' size={25} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name='two'
          options={{
            title: 'Chat',
            tabBarIcon: ({ color }) => (
              <Ionicons name='chatbox-outline' size={25} color={color} />
            ),
            headerRight: () => (
              <Link href='/modal' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name='info-circle'
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name='three'
          options={{
            title: 'Notifications',
            tabBarIcon: ({ color }) => (
              <Ionicons name='notifications-outline' size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='four'
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name='user-circle-o' color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
