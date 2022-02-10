import { View } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { AllBets } from '../components/dashboard/AllBets'
import { ModalFilter } from '../components/UI/ModalFilter'
import { DashboardProps } from '../navigations/AuthNavigation'
import { ButtonOpenModal } from '../components/UI/ButtonOpenModal'
import { Header } from '../components/UI/Header'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../services/axios.config'
import { getGames } from '../store/actions/games'

const Screen = styled.View`
  flex: 1;
  margin-top: 30px;
`

const SecondHeader = styled.View`
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Recents = styled.Text`
  color: #707070;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`

const NewBetContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const NewBetText = styled.Text`
  color: #B5C401;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  padding-right: 5px;
`

export function DashboardScreen ({ navigation }: DashboardProps) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Header styles={{marginTop: 30}} text='Account' onPress={() => {}} />
      <Screen>
        <SecondHeader>
          <Recents>Recent Games</Recents>
          <NewBetContainer onPress={() => navigation.navigate('NewBetNav')} activeOpacity={.5}>
            <>
              <NewBetText>New Bet</NewBetText>
              <AntDesign name='arrowright' size={18} color='#B5C401' />
            </>
          </NewBetContainer>
        </SecondHeader>
        <View>
          <ButtonOpenModal style={{marginTop: 30, marginLeft: 'auto', marginRight: 'auto'}} text='Filters' handleModal={() => setModalVisible(true)} />
          <ModalFilter visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
        <AllBets />
      </Screen>
    </>
  )
}
