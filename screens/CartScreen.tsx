import { Dimensions, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import { BetCard } from '../components/cart/BetCard'
import { AntDesign } from '@expo/vector-icons'

const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CartContainer = styled.View`
  background-color: #fff;
  border: 1px solid #E2E2E2;
  border-radius: 10px;
  width: 80%;
  height: ${Dimensions.get('screen').height / 1.7}px;
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
`

const TotalText = styled.Text`
  text-transform: uppercase;
  color: #707070;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const SaveButton = styled.TouchableOpacity`
  background-color: #E2E2E2;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SaveButtonText = styled.Text`
  color: #27C383;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  padding: 15px 10px;
`

export function CartScreen(){
  return (
    <Screen>
      <CartContainer>
        <Title>Cart</Title>
        <ScrollView>
          <BetCard />
          <BetCard />
          <BetCard />
          <BetCard />
        </ScrollView>
        <TotalText><Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Cart</Text> Total: R$ 7,00</TotalText>
        <SaveButton activeOpacity={0.5}>
          <SaveButtonText>Save</SaveButtonText>
          <AntDesign name='arrowright' color='#27C383' size={24} />
        </SaveButton>
      </CartContainer>
    </Screen>
  )
}