import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticationScreen } from '../screens/AuthenticationScreen'
import { RegistrationScreen } from '../screens/RegistrationScreen'
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen'

const Stack = createNativeStackNavigator()

export function AuthNavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Authentication' component={AuthenticationScreen} />
        <Stack.Screen options={{ headerShown: false }} name='ResetPassword' component={ResetPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type AuthStack = {
  Authentication: undefined
  ResetPassword: undefined
  Registration: undefined
}

export type AuthenticationProps = NativeStackScreenProps<AuthStack, 'Authentication'>
export type ResetPasswordProps = NativeStackScreenProps<AuthStack, 'ResetPassword'>
export type RegistrationProps = NativeStackScreenProps<AuthStack, 'Registration'>
