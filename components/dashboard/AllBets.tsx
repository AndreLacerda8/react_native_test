import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { api } from '../../services/axios.config'
import { getGames } from '../../store/actions/games'
import { BetCard } from './BetCard'

const GamesContainer = styled.View`
  margin-left: 20px;
  margin-right: 40px;
`

interface IBet {
  id: number
  user_id: number
  game_id: number
  choosen_numbers: string
  price: number
  created_at: string
  type: {
    id: number
    type: string
  }
}

export function AllBets(){
  const [bets, setBets] = useState<IBet[]>([])
  const dispatch = useDispatch()
  // @ts-expect-error
  const token = useSelector(state => state.user.token.token)
  // @ts-expect-error
  const games = useSelector(state => state.games.games)

  async function getBets(){
    const { data } = await api.get('/bet/all-bets', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    setBets(data)
  }

  useEffect(() => {
    getBets()
    dispatch(getGames())
  }, [])

  return (
    <ScrollView style={{ marginVertical: 20 }}>
      <GamesContainer>
        {bets.map(bet => {
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
