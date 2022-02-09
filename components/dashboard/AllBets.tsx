import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { BetCard } from './BetCard'

const GamesContainer = styled.View`
  margin-left: 20px;
  margin-right: 40px;
`

export function AllBets(){
  return (
    <ScrollView style={{ marginVertical: 20 }}>
      <GamesContainer>
        <BetCard
          color='#7F3992'
          numbers='01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          infos='30/11/2020 - (R$ 2,50)'
          game='Lotofácil'
        />
        <BetCard
          color='#01AC66'
          numbers='01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          infos='30/11/2020 - (R$ 2,50)'
          game='Megasena'
        />
        <BetCard
          color='#F79C31'
          numbers='01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          infos='30/11/2020 - (R$ 2,50)'
          game='Lotomania'
        />
      </GamesContainer>
    </ScrollView>
  )
}
