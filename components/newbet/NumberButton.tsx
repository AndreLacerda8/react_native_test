import styled from 'styled-components/native'

const NumberButtonStyle = styled.TouchableOpacity`
  background-color: #ADC0C4;
  width: 55px;
  height: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

const NumberText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`

export function NumberButton({ number }: { number: string }){
  return (
    <NumberButtonStyle activeOpacity={0.5}>
      <NumberText>{number}</NumberText>
    </NumberButtonStyle>
  )
}