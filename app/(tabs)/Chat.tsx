import React from 'react'
import {
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { Text, View } from '../../components/Themed'
import ChatHeader from '../../components/Chat/ChatHeader'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function ChatScreen() {
  const theme = useTheme()
  const messages = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ratione!',
      fromMe: true,
    },
    { id: 2, text: 'Hi there!', fromMe: false },
    { id: 3, text: 'Hi there!', fromMe: true },
    {
      id: 4,
      text: 'Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi thereHi there!',
      fromMe: false,
    },

    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum modi neque reiciendis, corporis quo minus sequi nesciunt a laborum dicta repellendus sit expedita dolorum?',
      fromMe: true,
    },
  ]

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.card }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.dark
              ? theme.colors.border
              : theme.colors.card,
          },
        ]}
      >
        <ChatHeader />
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: theme.dark ? '#555' : '#eee',
          }}
        />
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View
              style={[styles.messageBubble, item.fromMe && styles.fromMeBubble]}
            >
              <Text style={{ color: item.fromMe ? '#fff' : '#222' }}>
                {item.text}
              </Text>
            </View>
          )}
          inverted
          keyExtractor={(item) => item.id.toString()}
        />

        <SafeAreaView>
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: theme.dark ? theme.colors.border : '#eee',
              },
            ]}
          >
            <TextInput
              style={[styles.input, { backgroundColor: '#eee', color: '#222' }]}
              placeholder='Write a message...'
              placeholderTextColor={theme.dark ? '#222' : theme.colors.text}
            />
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.background,
                borderRadius: 100,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {}}
            >
              <Ionicons
                name='paper-plane-outline'
                size={20}
                color={theme.dark ? '#fff' : '#222'}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },

  messageBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
    lineHeight: 20,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 15,
    maxWidth: '80%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 15,
  },

  fromMeBubble: {
    backgroundColor: '#58b',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 100,
    color: '#000',
    paddingVertical: 16,
    marginRight: 10,
  },
})
