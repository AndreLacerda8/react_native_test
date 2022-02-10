import styled from 'styled-components/native'
import { Screen } from '../components/auth/Screen'
import { CustomButton } from '../components/auth/CustomButton'
import { FormTitle } from '../components/auth/FormTitle'
import { InputEmail, InputPassword } from '../components/auth/Input'
import { Form } from '../components/auth/Form'
import { AuthenticationProps } from '../navigations/AuthNavigation'
import { Alert } from 'react-native'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/actions/user'

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

interface IFormInput{
  name: string
  email: string
  password: string
}

export function AuthenticationScreen ({ navigation }: AuthenticationProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()

  async function login({ email, password }: IFormInput){
    try {
      await dispatch(loginUser({ email, password }))
      navigation.navigate('Dashboard')
    } catch(error: any){
      Alert.alert(error.message)
    }
  }

  return (
    <Screen margin={50}>
      <FormTitle>Authentication</FormTitle>
      <Form>
        <InputEmail control={control} errors={errors} />
        <InputPassword control={control} errors={errors} />
        <ForgotPassContainer onPress={() => navigation.navigate('ResetPassword')} activeOpacity={.5}>
          <ForgotPass>I forgot my password</ForgotPass>
        </ForgotPassContainer>
        <CustomButton onPress={handleSubmit(login)} title='Login' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Registration')} title='Sign Up' color='#707070' />
    </Screen>
  )
}
