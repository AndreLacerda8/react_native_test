import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AuthenticationScreen } from '../screens/AuthenticationScreen'
import { RegistrationScreen } from '../screens/RegistrationScreen'
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen'
import { DashboardScreen } from '../screens/DashboardScreen'
import { NewBetScreen } from '../screens/NewBetScreen'
import { CartScreen } from '../screens/CartScreen'

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

function NewBetNavigator(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingTop: 30 }
      }}
    >
      <Tab.Screen name='NewBet' component={NewBetScreen} />
      <Tab.Screen name='Cart' component={CartScreen} />
    </Tab.Navigator>
  )
}

export function AuthNavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Authentication' component={AuthenticationScreen} />
        <Stack.Screen options={{ headerShown: false }} name='ResetPassword' component={ResetPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Dashboard' component={DashboardScreen} />
        <Stack.Screen options={{ headerShown: false }} name='NewBetNav' component={NewBetNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type AuthStack = {
  Authentication: undefined
  ResetPassword: undefined
  Registration: undefined
  Dashboard: undefined
  NewBetNav: undefined
}

export type AuthenticationProps = NativeStackScreenProps<AuthStack, 'Authentication'>
export type ResetPasswordProps = NativeStackScreenProps<AuthStack, 'ResetPassword'>
export type RegistrationProps = NativeStackScreenProps<AuthStack, 'Registration'>
export type DashboardProps = NativeStackScreenProps<AuthStack, 'Dashboard'>
