import styled from 'styled-components/native'
import { ButtonOpenModal } from '../UI/ButtonOpenModal'
import { ModalFilter } from '../UI/ModalFilter'

const ChooseGameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`

const SelectedGame = styled.View`
  max-width: 200px;
  padding: 10px 30px;
  background-color: ${(props: {color: string}) => props.color};
  border-radius: 100px;
`

const SelectedGameText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
`

interface IProps {
  onOpen: () => void
  onClose: () => void
  visible: boolean
}

export function ChooseGame({ visible, onOpen, onClose }: IProps){
  return (
    <ChooseGameContainer>
      <ButtonOpenModal text='Choose a game' handleModal={onOpen} />
      <ModalFilter visible={visible} onClose={onClose} />
      <SelectedGame color='#7F3992'>
        <SelectedGameText>Lotofácil</SelectedGameText>
      </SelectedGame>
    </ChooseGameContainer>
  )
}