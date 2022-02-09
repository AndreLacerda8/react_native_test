import styled from 'styled-components/native'
import { Screen } from '../components/auth/Screen'
import { CustomButton } from '../components/auth/CustomButton'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Form } from '../components/auth/Form'


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

export function Authentication () {
  return (
    <Screen>
      <FormTitle>Authentication</FormTitle>
      <Form>
        <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
        <Input placeholder='Password' secureTextEntry autoCapitalize='none' />
        <ForgotPassContainer activeOpacity={.5}>
          <ForgotPass>I forgot my password</ForgotPass>
        </ForgotPassContainer>
        <CustomButton title='Login' color='#B5C401' />
      </Form>
      <CustomButton title='Sign Up' color='#707070' />
    </Screen>
  )
}
