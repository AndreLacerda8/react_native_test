import { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import { NumberButton } from '../components/newbet/NumberButton'
import { ChooseGame } from '../components/newbet/ChooseGame'
import { Actions } from '../components/newbet/Actions'

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

export function NewBetScreen(){
  const [modalVisible, setModalVisible] = useState(false)

  const numbers = new Array(20).fill(0).map((num, index) => index < 9 ? '0' + (index + 1) : (index + 1) + '')

  return (
    <Screen>
      <ScrollView>
        <BetTitle><Text style={{ fontWeight: 'bold' }}>New Bet</Text> For Lotofácil</BetTitle>
        <ChooseGame visible={modalVisible} onOpen={() => setModalVisible(true)} onClose={() => setModalVisible(false)} />
        <TitleDescription>Fill your bet</TitleDescription>
        <TextDescription>Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</TextDescription>
        <NumbersContainer>
          {numbers.map(num => <NumberButton key={num} number={num} />)}
        </NumbersContainer>
        <Actions />
      </ScrollView>
    </Screen>
  )
}
