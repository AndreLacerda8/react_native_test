import { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import { ModalFilter } from '../components/ModalFilter'
import { ActionButton } from '../components/newbet/ActionButton'
import { NumberButton } from '../components/newbet/NumberButton'
import { Ionicons } from '@expo/vector-icons'
import { ButtonOpenModal } from '../components/ButtonOpenModal'

const Screen = styled.View`
  flex: 1;
  margin-bottom: 10px;
  padding: 15px;
`

const BetTitle = styled.Text`
  font-size: 22px;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
`

const ChooseGameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`

const ChooseGameOpenModal = styled.TouchableOpacity`
  background-color: #b1aeae;
  padding: 10px 20px;
  border-radius: 20px;
`

const ChooseGameText = styled.Text`
  color: #000;
  font-style: italic;
  text-align: center;
`

const FilterButton = styled.TouchableOpacity`
  max-width: 200px;
  padding: 10px 30px;
  background-color: ${(props: {color: string}) => props.color};
  border-radius: 100px;
`

const FilterButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
`

const TextDescription = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: #868686;
`

const TitleDescription = styled(TextDescription)`
  margin-top: 20px;
  font-weight: bold;
`

const NumbersContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
`

const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`

export function NewBetScreen(){
  const [modalVisible, setModalVisible] = useState(false)

  const numbers = new Array(20).fill(0).map((num, index) => index < 9 ? '0' + (index + 1) : (index + 1) + '')

  return (
    <Screen>
      <ScrollView>
        <BetTitle><Text style={{ fontWeight: 'bold' }}>New Bet</Text> For Lotofácil</BetTitle>
        <ChooseGameContainer>
          <ButtonOpenModal text='Choose a game' handleModal={() => setModalVisible(true)} />
          <ModalFilter visible={modalVisible} onClose={() => setModalVisible(false)} />
          <FilterButton color='#7F3992'>
            <FilterButtonText>Lotofácil</FilterButtonText>
          </FilterButton>
        </ChooseGameContainer>

        <TitleDescription>Fill your bet</TitleDescription>
        <TextDescription>Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</TextDescription>
        <NumbersContainer>
          {numbers.map(num => <NumberButton key={num} number={num} />)}
        </NumbersContainer>

        <ActionsContainer>
          <ActionButton action='Complete Game' outline />
          <ActionButton action='Clear Game' outline />
        </ActionsContainer>
        <ActionsContainer>
          <ActionButton action='Add to cart'>
            <Ionicons name='cart-outline' color='#fff' size={20} style={{ paddingLeft: 15, paddingVertical: 15 }} />
          </ActionButton>
        </ActionsContainer>
      </ScrollView>
    </Screen>
  )
}
