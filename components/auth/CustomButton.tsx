import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

interface ITextButton{
  color: string
  left?: boolean
}

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  margin: 30px 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextButton = styled.Text<ITextButton>`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  padding-right: ${props => props.left ? '0' : '12px'};
  padding-left: ${props => props.left ? '12px' : '0'};
  padding-bottom: 5px;
`

interface IProps{
  title: string
  color: string
  onPress: () => void
  left?: boolean
}

export function CustomButton(props: IProps){
  return (
    <Button onPress={props.onPress} activeOpacity={.5}>
      {props.left ? (
        <>
          <AntDesign name='arrowleft' size={30} color={props.color} />
          <TextButton left color={props.color}>{props.title}</TextButton>
        </>
      ) : (
        <>
          <TextButton color={props.color}>{props.title}</TextButton>
          <AntDesign name='arrowright' size={30} color={props.color} />
        </>
      )}
    </Button>
  )
}
