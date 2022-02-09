import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'

const ScreenStyle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export function Screen(props: { children: any, margin?: number }){
  return (
    <ScreenStyle>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ marginTop: props.margin }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
              {props.children}
            </Container>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </ScreenStyle>
  )
}
