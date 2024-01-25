import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Text } from '../Themed'
import { useTheme } from '@react-navigation/native'

export const AuthCallout = ({
  text,
  linkText,
  route,
}: {
  text: string
  linkText: string
  route: any
}) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      style={{
        padding: 10,
        alignSelf: 'center',
        marginTop: 10,
      }}
    >
      <Text style={{ color: theme.colors.primary }}>
        {text}{' '}
        <Text
          style={{
            fontWeight: 'bold',
            color: theme.colors.primary,
          }}
        >
          {linkText}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}
