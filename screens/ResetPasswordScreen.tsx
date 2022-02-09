import { useForm } from 'react-hook-form'
import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { InputEmail } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'
import { ResetPasswordProps } from '../navigations/AuthNavigation'

export function ResetPasswordScreen ({ navigation }: ResetPasswordProps){
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ''
    }
  })

  return (
    <Screen margin={90}>
      <FormTitle>Reset password</FormTitle>
      <Form>
      <InputEmail control={control} errors={errors} />
        <CustomButton onPress={handleSubmit(() => {})} title='Send link' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Authentication')} title='Back' color='#707070' left />
    </Screen>
  )
}
