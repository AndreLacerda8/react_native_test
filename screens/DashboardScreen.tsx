import { View } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { AllBets } from '../components/dashboard/AllBets'
import { ModalFilter } from '../components/dashboard/ModalFilter'
// import { useSelector } from 'react-redux'

const Screen = styled.View`
  flex: 1;
  margin-top: 80px;
  background-color: #F7F7F7;
`

const Header = styled.View`
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

const FilterOpenModal = styled.TouchableOpacity`
  margin: 30px auto 0;
  background-color: #b1aeae;
  padding: 10px 30px;
  border-radius: 20px;
`

const FilterText = styled.Text`
  color: #000;
  font-style: italic;
  text-align: center;
`

export function DashboardScreen () {
  // const name = useSelector(state => state.user.user.name)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Screen>
      <Header>
        <Recents>Recent Games</Recents>
        <NewBetContainer activeOpacity={.5}>
          <>
            <NewBetText>New Bet</NewBetText>
            <AntDesign name='arrowright' size={18} color='#B5C401' />
          </>
        </NewBetContainer>
      </Header>
      <View>
        <FilterOpenModal activeOpacity={.5} onPress={() => setModalVisible(true)}>
          <FilterText>Filters</FilterText>
        </FilterOpenModal>
        <ModalFilter visible={modalVisible} onClose={() => setModalVisible(false)} />
      </View>
      <AllBets />
    </Screen>
  )
}
