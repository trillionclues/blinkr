import React, { useRef, useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import UserDetailsBottomSheet from '../User/UserDetailsBottomSheet'
import { MapDisplayProps } from '../../types/map/MapDisplay'
import BottomSheet from '@gorhom/bottom-sheet'
import { useThemeColor } from '../Themed'
import { UserMarkerProps } from '../../types/user/UserData'

const MapDisplay = ({
  selectedUser,
  userArray,
  onUserSelect,
}: MapDisplayProps) => {
  const [isMarkerPressed, setIsMarkerPressed] = useState(false)
  const userDetailsBottomSheetRef = useRef<BottomSheet>(null)
  const mapBackgroundColor = useThemeColor(
    { light: 'white', dark: '#222' },
    'background'
  )

  const handleUserMarkerPress = (selectedUser: UserMarkerProps) => {
    onUserSelect(selectedUser)
    setIsMarkerPressed(true)
    userDetailsBottomSheetRef.current?.expand()
  }

  // const closeBottomSheet = () => userDetailsBottomSheetRef.current?.forceClose()

  const INITIAL_REGION = {
    latitude: 6.524379,
    longitude: 3.379206,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  return (
    <>
      <MapView
        style={[styles.map, { backgroundColor: mapBackgroundColor }]}
        provider={PROVIDER_GOOGLE}
        initialRegion={
          selectedUser.position ? selectedUser.position : INITIAL_REGION
        }
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {userArray.map((user) => (
          <Marker
            key={user.id}
            coordinate={{
              latitude: user.position.latitude,
              longitude: user.position.longitude,
            }}
            onPress={() => handleUserMarkerPress(user)}
          >
            <Image source={user.avatar} style={styles.avatar} />
          </Marker>
        ))}
      </MapView>
      {isMarkerPressed && (
        <UserDetailsBottomSheet
          bottomSheetRef={userDetailsBottomSheetRef}
          user={selectedUser}
        />
      )}
    </>
  )
}

export default MapDisplay

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2cd18a',
    backgroundColor: '#fff',
  },
  calloutAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  calloutTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutBubble: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
})
