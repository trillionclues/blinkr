import React from 'react'
import { Text, View } from '../../components/Themed'
import PagerView from 'react-native-pager-view'
import Welcome from './Welcome'
import AuthSelection from './AuthSelection'
import WelcomeBack from './EnterDetails'

export default function WelcomePagerSlider() {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={{ flex: 1 }} initialPage={0}>
        <View
          key='1'
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Welcome />
        </View>

        <View key='2'>
          <AuthSelection />
        </View>
        <View key='3'>
          <WelcomeBack />
        </View>
      </PagerView>
    </View>
  )
}
