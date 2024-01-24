import {
  ActivityIndicator,
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Text } from '../Themed'

interface ButtonProps {
  text: string
  width?: string
  height?: string

  style?: ViewStyle
  loading?: boolean
  disabled?: boolean
  icon?: JSX.Element | null
  iconRight?: boolean
  onPress?: () => void
}

const Button = ({
  text,
  width,
  height,
  style,
  loading,
  disabled,
  icon,
  iconRight,
  onPress,
}: ButtonProps) => {
  return (
    <View style={style}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.wrap]}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator color='#fff' />
        ) : (
          <View style={styles.row}>
            {icon && !iconRight && icon}
            <Text style={[styles.text]}>{text}</Text>
            {icon && iconRight && icon}
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'relative',
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
})

export default Button
