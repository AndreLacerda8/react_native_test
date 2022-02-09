import { useForm } from 'react-hook-form'
import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { Input, InputEmail, InputPassword } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'
import { RegistrationProps } from '../navigations/AuthNavigation'

export function RegistrationScreen ({ navigation }: RegistrationProps){
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

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
        <CustomButton onPress={handleSubmit(() => {})} title='Register' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Authentication')} title='Back' color='#707070' left />
    </Screen>
  )
}
