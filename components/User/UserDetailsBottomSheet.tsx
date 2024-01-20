import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import CustomBottomSheet from '../CustomBottomSheet'
import { Entypo } from '@expo/vector-icons'
import { Text } from '../Themed'
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

const UserDetailsBottomSheet = ({ bottomSheetRef, user }: any) => {
  // console.log(user)
  // Add overlay on open
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        opacity={0.5}
      />
    ),
    []
  )
  return (
    <CustomBottomSheet
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      snapPoints={['40%']}
    >
      <View style={styles.bottomSheetContent}>
        <View style={styles.userInfoContainer}>
          {/* User Avatar */}
          <View style={{ marginRight: 24 }}>
            <Image source={user.avatar} style={styles.avatar} />
          </View>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text
              style={{ fontSize: 22 }}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              {user.name}
            </Text>
            <View style={styles.directionContainer}>
              <Entypo name='paper-plane' size={24} color='#4976fd' />
              <Text
                style={styles.distance}
                lightColor='rgba(0,0,0,0.8)'
                darkColor='rgba(255,255,255,0.8)'
              >
                200m
              </Text>
            </View>
          </View>
        </View>

        {/* Horizontal Rule */}
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            marginVertical: 18,
            opacity: 0.3,
          }}
        />

        {/* Interests Matched Section */}
        <View style={styles.interestsSection}>
          <Text
            style={{ fontSize: 18 }}
            lightColor='rgba(0,0,0,0.8)'
            darkColor='rgba(255,255,255,0.8)'
          >
            5 interests matched:
          </Text>
          <View style={styles.interestsList}>
            <Text
              style={styles.interest}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              Marketing
            </Text>
            <Text
              style={styles.interest}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              Football
            </Text>
            <Text
              style={styles.interest}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              Design
            </Text>

            <View>
              <Text
                style={styles.plusButton}
                lightColor='rgba(0,0,0,0.8)'
                darkColor='rgba(255,255,255,0.8)'
              >
                +5
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.writeMessageButton}>
          <Text
            style={{ fontSize: 20 }}
            lightColor='#fff'
            darkColor='rgba(255,255,255,0.8)'
          >
            Write Message
          </Text>
        </TouchableOpacity>
      </View>
    </CustomBottomSheet>
  )
}

export default UserDetailsBottomSheet

const styles = StyleSheet.create({
  bottomSheetContent: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    justifyContent: 'center',
    zIndex: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  directionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  writeMessageButton: {
    backgroundColor: '#4976fd',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  interestsSection: {
    // marginTop: 20,
    marginBottom: 20,
  },

  interestsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 15,
    width: '100%',
  },
  interest: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  plusButton: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    marginBottom: 10,
  },
})
