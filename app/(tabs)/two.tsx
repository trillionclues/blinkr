import React from 'react'
import {
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { Text, View } from '../../components/Themed'

export default function ChatScreen() {
  const messages = [
    { id: 1, text: 'Hello!', fromMe: false },
    { id: 2, text: 'Hi there!', fromMe: true },
  ]

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <Text>Go back One</Text>
        </TouchableOpacity>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={[styles.message, item.fromMe && styles.myMessage]}>
              <Text>{item.text}</Text>
            </View>
          )}
          inverted
        />

        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Type message...' />
            <Button title='Send' onPress={() => {}} />
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  message: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },

  myMessage: {
    backgroundColor: '#58b',
    alignSelf: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    padding: 5,
  },
})
