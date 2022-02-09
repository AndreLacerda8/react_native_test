import styled from 'styled-components/native'

const TitleContainer = styled.View`
  margin-bottom: 26px;
`

const Title = styled.Text`
  color: #707070;
  font-size: 26px;
  font-weight: bold;
  font-style: italic;
`

export function FormTitle(props: { children: any }){
  return (
    <TitleContainer>
      <Title>{props.children}</Title>
    </TitleContainer>
  )
}
