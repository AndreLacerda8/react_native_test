import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

interface ITextButton{
  color: string
}

const Screen = styled.View`
  background-color: #F7F7F7;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TitleContainer = styled.View`
  margin-bottom: 26px;
`

const Title = styled.Text`
  color: #707070;
  font-size: 26px;
  font-weight: bold;
  font-style: italic;
`

const Form = styled.View`
  background-color: #fff;
  width: 75%;
  border: 1px solid #ddd;
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
`

const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #ebebeb;
  padding: 26px;
`

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

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  margin: 30px 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextButton = styled.Text<ITextButton>`
  color: ${props => props.color};
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  padding-right: 17px;
  padding-bottom: 10px;
`

export function Authentication () {
  return (
    <Screen>
      <TitleContainer>
        <Title>Authentication</Title>
      </TitleContainer>
      <Form>
        <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
        <Input placeholder='Password' secureTextEntry autoCapitalize='none' />
        <ForgotPassContainer activeOpacity={.5}>
          <ForgotPass>I forgot my password</ForgotPass>
        </ForgotPassContainer>
        <Button activeOpacity={.5}>
          <TextButton color='#B5C401'>Login</TextButton>
          <AntDesign name='arrowright' size={35} color='#B5C401' />
        </Button>
      </Form>
      <Button activeOpacity={.5}>
        <TextButton color='#707070'>Sign Up</TextButton>
        <AntDesign name='arrowright' size={35} color='#707070' />
      </Button>
    </Screen>
  )
}
