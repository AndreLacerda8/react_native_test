import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'
import { ResetPasswordProps } from '../navigations/AuthNavigation'

export function ResetPasswordScreen ({ navigation }: ResetPasswordProps){
  return (
    <Screen margin={90}>
      <FormTitle>Reset password</FormTitle>
      <Form>
        <Input placeholder='Email' />
        <CustomButton onPress={() => {}} title='Send link' color='#B5C401' />
      </Form>
      <CustomButton onPress={() => navigation.navigate('Authentication')} title='Back' color='#707070' left />
    </Screen>
  )
}
