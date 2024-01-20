import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'
import MapDisplay from '../../components/Map/MapDisplay'
import { UserMarkerProps } from '../../types/user/UserData'
import { usermarkers } from '../../assets/markers/markers'

export default function TabOneScreen() {
  const [selectedUser, setSelectedUser] = useState<UserMarkerProps>(
    {} as UserMarkerProps
  )

  const handleUserSelect = (user: UserMarkerProps) => {
    setSelectedUser(user)
  }

  return (
    <>
      <MapDisplay
        selectedUser={selectedUser}
        userArray={usermarkers}
        onUserSelect={handleUserSelect}
      />
      <SafeAreaView style={styles.container}>
        <StatusBar />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar?.currentHeight : 0,
  },
})
