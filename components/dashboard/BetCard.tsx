import { View } from 'react-native'
import styled from 'styled-components/native'

const GameCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`

const HighlightLine = styled.View`
  height: 120px;
  width: 6px;
  border-radius: 100px;
  background-color: ${(props: {color: string}) => props.color};
  margin-right: 15px;
`

const TextNumbers = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
  margin-bottom: 10px;
`

const TextInfos = styled.Text`
  color: #868686;
  font-size: 15px;
  margin-bottom: 10px;
`

const TextGame = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
`

interface IProps{
  color: string
  numbers: string
  infos: string
  game: string
}

export function BetCard({ color, numbers, infos, game }: IProps){
  return (
    <GameCard>
      <HighlightLine color={color} />
      <View>
        <TextNumbers>{numbers}</TextNumbers>
        <TextInfos>{infos}</TextInfos>
        <TextGame color={color}>{game}</TextGame>
      </View>
    </GameCard>
  )
}
