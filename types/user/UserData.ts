import { ImageSourcePropType } from 'react-native'

export interface UserMarkerProps {
  id: number
  name: string
  avatar: ImageSourcePropType
  position: {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
  }
}
