import { Alert, Button, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
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

const FiltersContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const FilterButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-bottom: 20px;
  min-width: 150px;
  padding: 10px 20px;
  border: 2px solid ${(props: {color: string}) => props.color};
  border-radius: 100px;
`

const FilterButtonText = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
`

const GamesContainer = styled.View`
  margin-left: 20px;
  margin-right: 40px;
`

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
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}  
        >
          <FiltersContainer>
            <FilterButton color='#7F3992'>
              <FilterButtonText color='#7F3992'>Lotofácil</FilterButtonText>
            </FilterButton>
            <FilterButton color='#01AC66'>
              <FilterButtonText color='#01AC66'>Mega-Sena</FilterButtonText>
            </FilterButton>
            <FilterButton color='#F79C31'>
              <FilterButtonText color='#F79C31'>Lotomania</FilterButtonText>
            </FilterButton>
            <Button title='Back' onPress={() => setModalVisible(false)} />
          </FiltersContainer>
        </Modal>
      </View>
      <ScrollView style={{ marginVertical: 20 }}>
        <GamesContainer>
          <GameCard>
            <HighlightLine color='#7F3992' />
            <View>
              <TextNumbers>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</TextNumbers>
              <TextInfos>30/11/2020 - (R$ 2,50)</TextInfos>
              <TextGame color='#7F3992'>Lotofácil</TextGame>
            </View>
          </GameCard>
          <GameCard>
            <HighlightLine color='#01AC66' />
            <View>
              <TextNumbers>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</TextNumbers>
              <TextInfos>30/11/2020 - (R$ 2,50)</TextInfos>
              <TextGame color='#01AC66'>Megasena</TextGame>
            </View>
          </GameCard>
          <GameCard>
            <HighlightLine color='#F79C31' />
            <View>
              <TextNumbers>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</TextNumbers>
              <TextInfos>30/11/2020 - (R$ 2,50)</TextInfos>
              <TextGame color='#F79C31'>Lotomania</TextGame>
            </View>
          </GameCard>
        </GamesContainer>
      </ScrollView>
    </Screen>
  )
}
