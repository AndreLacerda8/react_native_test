import { Controller } from 'react-hook-form'
import { StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: #ebebeb;
  padding: 20px;
  color: #000;
`

type Props = {
  control: any
  errors: any
}

export function InputEmail({ control, errors }: Props){
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /.*@.*\..*/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={errors.email && styles.error}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.textError}>Insira um email válido</Text>}
    </>
  )
}

export function InputPassword({ control, errors }: Props){
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 5
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={errors.password && styles.error}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Password'
            secureTextEntry
            autoCapitalize='none'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.textError}>Insira uma senha válida (minímo 5 caracteres)</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  error: {
    borderLeftColor: '#ac0707',
    borderLeftWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },

  textError: {
    color: '#ac0707',
    paddingHorizontal: 5,
    paddingVertical: 10
  }
})
