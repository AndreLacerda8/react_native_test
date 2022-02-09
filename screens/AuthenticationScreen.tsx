import styled from 'styled-components/native'
import { Screen } from '../components/auth/Screen'
import { CustomButton } from '../components/auth/CustomButton'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Form } from '../components/auth/Form'
import { AuthenticationProps } from '../navigations/AuthNavigation'


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

interface IProps{
  navigation: any
}

export function AuthenticationScreen ({ navigation }: AuthenticationProps) {
  return (
    <Screen margin={50}>
      <FormTitle>Authentication</FormTitle>
      <Form>
        <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
        <Input placeholder='Password' secureTextEntry autoCapitalize='none' />
        <ForgotPassContainer onPress={() => navigation.navigate('ResetPassword')} activeOpacity={.5}>
          <ForgotPass>I forgot my password</ForgotPass>
        </ForgotPassContainer>
        <CustomButton onPress={() => {}} title='Login' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Registration')} title='Sign Up' color='#707070' />
    </Screen>
  )
}
