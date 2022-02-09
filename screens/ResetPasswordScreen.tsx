import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'

export function ResetPasswordScreen(){
  return (
    <Screen margin={80}>
      <FormTitle>Reset password</FormTitle>
      <Form>
        <Input placeholder='Email' />
        <CustomButton title='Send link' color='#B5C401' />
      </Form>
      <CustomButton title='Back' color='#707070' left />
    </Screen>
  )
}
