import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 20px auto 30px;
`

const HighlightLine = styled.View`
  width: 5px;
  height: 140%;
  background-color: #7F3992;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  margin-left: 5px;
  margin-right: 10px;
`

const BetInfosContainer = styled.View`
  margin-right: 10px;
`

const BetNumbers = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
  margin-bottom: 10px;
  max-width: 200px;
`

const InfosBet = styled.View`
  flex-direction: row;
  align-items: center;
`

const GameText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: #7F3992;
  margin-right: 10px;
`

const PriceText = styled.Text`
  font-size: 14px;
  color: #868686;
`

export function BetCard(){
  return (
    <CardContainer>
      <Ionicons style={{ marginLeft: 15 }} name="trash-outline" size={24} color="#888888" />
      <HighlightLine />
      <BetInfosContainer>
        <BetNumbers>01,02,04,05,06,07,09,15,17,20,21,22,23,24,25</BetNumbers>
        <InfosBet>
          <GameText>Lotofácil</GameText>
          <PriceText>R$ 2,50</PriceText>
        </InfosBet>
      </BetInfosContainer>
    </CardContainer>
  )
}