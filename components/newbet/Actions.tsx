import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { ActionButton } from './ActionButton'

const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`

export function Actions(){
  return (
    <>
      <ActionsContainer>
        <ActionButton action='Complete Game' outline />
        <ActionButton action='Clear Game' outline />
      </ActionsContainer>
      <ActionsContainer>
        <ActionButton action='Add to cart'>
          <Ionicons name='cart-outline' color='#fff' size={20} style={{ paddingLeft: 15, paddingVertical: 15 }} />
        </ActionButton>
      </ActionsContainer>
    </>
  )
}