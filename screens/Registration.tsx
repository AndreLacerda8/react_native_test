import { CustomButton } from '../components/auth/CustomButton'
import { Form } from '../components/auth/Form'
import { FormTitle } from '../components/auth/FormTitle'
import { Input } from '../components/auth/Input'
import { Screen } from '../components/auth/Screen'

export function Registration(){
  return (
    <Screen margin={50}>
      <FormTitle>Registration</FormTitle>
      <Form>
        <Input placeholder='Name' />
        <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' />
        <Input placeholder='password' secureTextEntry autoCapitalize='none' />
        <CustomButton title='Register' color='#B5C401' />
      </Form>
      <CustomButton title='Back' color='#707070' left />
    </Screen>
  )
}
