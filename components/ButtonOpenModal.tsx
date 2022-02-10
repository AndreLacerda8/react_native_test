import styled from 'styled-components/native'

const ButtonOpenModalStyle = styled.TouchableOpacity`
  background-color: #dfdfdf;
  padding: 10px 20px;
  border-radius: 20px;
`

const ButtonText = styled.Text`
  color: #000;
  font-style: italic;
  text-align: center;
`

export function ButtonOpenModal({ text, handleModal, style }: { text: string, handleModal: () => void, style?: any }){
  return (
    <ButtonOpenModalStyle style={{...style}} activeOpacity={.5} onPress={handleModal}>
      <ButtonText>{text}</ButtonText>
    </ButtonOpenModalStyle>
  )
}