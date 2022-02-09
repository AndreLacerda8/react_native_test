import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export function DashboardScreen () {
  // @ts-expect-error
  const name = useSelector(state => state.user.user.name)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DASHBOARD</Text>
      <Text>{name}</Text>
    </View>
  )
}