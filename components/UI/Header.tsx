import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

const Container = styled.View`
  width: 100%;
  border-bottom-width: 3px;
  border-bottom-color: #EBEBEB;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`

export function Header({ text, onPress, styles }: { text: string, onPress: () => void, styles?: any }){
  return (
    <Container style={{...styles}}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <ButtonText>{text}</ButtonText>
      </TouchableOpacity>
      <Button activeOpacity={0.5}>
        <ButtonText>Log out</ButtonText>
        <AntDesign style={{ paddingLeft: 10 }} name='arrowright' size={18} color='#707070' />
      </Button>
    </Container>
  )
}