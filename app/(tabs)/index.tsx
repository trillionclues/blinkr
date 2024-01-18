import React, { useCallback, useRef } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { Button, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import CustomBottomSheet from '../../components/CustomBottomSheet'
import { Text } from '../../components/Themed'

export default function TabThreeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const openBottomSheet = () => bottomSheetRef.current?.expand()
  const closeBottomSheet = () => bottomSheetRef.current?.forceClose()

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
    <View style={styles.container}>
      <Text>TabThreeScreen</Text>
      <Button title='Open Bottom Sheet' onPress={openBottomSheet} />
      <CustomBottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.userInfoContainer}>
            {/* User Avatar */}
            <View style={{ marginRight: 24 }}>
              <Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/32638510',
                }}
                style={styles.avatar}
              />
            </View>
            <View style={{ flexDirection: 'column', gap: 5 }}>
              <Text
                style={{ fontSize: 22 }}
                lightColor='rgba(0,0,0,0.8)'
                darkColor='rgba(255,255,255,0.8)'
              >
                John Howard, 25
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    justifyContent: 'center',
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
