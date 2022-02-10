import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { Bet } from '../../store/reducers/bets'
import { BetCard } from './BetCard'

const GamesContainer = styled.View`
  margin-left: 20px;
  margin-right: 40px;
`

export function AllBets(){
  // @ts-expect-error
  const bets = useSelector(state => state.bets.bets)
  // @ts-expect-error
  const games = useSelector(state => state.games.games)
  const dispatch = useDispatch()

  return (
    <ScrollView style={{ marginVertical: 20 }}>
      <GamesContainer>
        {bets?.map((bet: Bet) => {
          const currentGame = games.find((gm: any) => gm.id === bet.game_id)
          return(
          <BetCard
            key={bet.id}
            color={currentGame?.color || '#fff'}
            numbers={bet.choosen_numbers}
            infos={`${new Date(bet.created_at).toLocaleDateString()} - (R$ ${bet.price.toFixed(2).replace('.', ',')})`}
            game={bet.type.type}
          />
        )})}
      </GamesContainer>
    </ScrollView>
  )
}
