import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'

import Colors from '../../constants/Colors'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginTop: 5 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => (
            <Feather name='map-pin' size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => (
            <Ionicons name='chatbox-outline' size={30} color={color} />
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
          title: 'Tab Three',
          tabBarIcon: ({ color }) => (
            <Ionicons name='notifications-outline' size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='four'
        options={{
          title: 'Tab Four',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='user-circle-o' color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
