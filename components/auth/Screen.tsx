import { Dimensions, Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'

const ScreenStyle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export function Screen(props: { children: any }){
  return (
    <ScreenStyle>
      <ScrollView style={{ flex: 1, width: '100%', marginVertical: Dimensions.get('screen').height / 9 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            {props.children}
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ScreenStyle>
  )
}
