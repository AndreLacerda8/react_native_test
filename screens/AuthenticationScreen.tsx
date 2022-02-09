import styled from 'styled-components/native'
import { Screen } from '../components/auth/Screen'
import { CustomButton } from '../components/auth/CustomButton'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Form } from '../components/auth/Form'
import { AuthenticationProps } from '../navigations/AuthNavigation'
import { useState } from 'react'
import { api } from '../services/axios.config'
import { Alert } from 'react-native'

const ForgotPassContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: 26px;
`

const ForgotPass = styled.Text`
  color: #c1c1c1;
  font-style: italic;
  text-align: right;
  padding-right: 27px;
`

export function AuthenticationScreen ({ navigation }: AuthenticationProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login(email: string, password: string){
    try {
      const { data } = await api.post('/login', {
        email,
        password
      })
      console.log('DATA: ', data)
      setEmail('')
      setPassword('')
      navigation.navigate('Dashboard')
    } catch(error: any){
      Alert.alert(error.message)
    }
  }

  return (
    <Screen margin={50}>
      <FormTitle>Authentication</FormTitle>
      <Form>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder='Password'
          secureTextEntry
          autoCapitalize='none'
        />
        <ForgotPassContainer onPress={() => navigation.navigate('ResetPassword')} activeOpacity={.5}>
          <ForgotPass>I forgot my password</ForgotPass>
        </ForgotPassContainer>
        <CustomButton onPress={() => login(email, password)} title='Login' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Registration')} title='Sign Up' color='#707070' />
    </Screen>
  )
}
