import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { Input, InputEmail, InputPassword } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'
import { RegistrationProps } from '../navigations/AuthNavigation'
import { api } from '../services/axios.config'
import { signupUser } from '../store/actions/user'

interface IFormInput{
  name: string
  email: string
  password: string
}

export function RegistrationScreen ({ navigation }: RegistrationProps){
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()

  async function createUser({ name, email, password }: IFormInput){
    try{
      await dispatch(signupUser({ name, email, password }))
      navigation.navigate('Dashboard')
    } catch(error: any){
      Alert.alert(error.message)
    }
  }

  return (
    <Screen margin={50}>
      <FormTitle>Registration</FormTitle>
      <Form>
        <Input
          name='name'
          propsTextInput={{ placeholder: 'Name' }}
          control={control}
          errors={errors}
          rules={{ required: true }}
          errorMessage='Preencha seu nome'
        />
        <InputEmail control={control} errors={errors} />
        <InputPassword control={control} errors={errors} />
        <CustomButton onPress={handleSubmit(createUser)} title='Register' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Authentication')} title='Back' color='#707070' left />
    </Screen>
  )
}
