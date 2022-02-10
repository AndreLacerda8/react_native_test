import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

const SaveButtonStyle = styled.TouchableOpacity`
  background-color: #F4F4F4;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SaveButtonText = styled.Text`
  color: #27C383;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  padding: 15px 10px;
`

export function SaveButton(){
  return (
    <SaveButtonStyle activeOpacity={0.5}>
      <SaveButtonText>Save</SaveButtonText>
      <AntDesign name='arrowright' color='#27C383' size={24} />
    </SaveButtonStyle>
  )
}