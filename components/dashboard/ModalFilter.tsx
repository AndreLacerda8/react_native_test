import { useState } from 'react'
import { Alert, Button, Modal } from 'react-native'
import styled from 'styled-components/native'

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

interface IProps{
  visible: boolean
  onClose: () => void
}

export function ModalFilter({ visible, onClose }: IProps){
  return (
    <Modal
      animationType="slide"
      visible={visible} 
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
        <Button title='Back' onPress={onClose} />
      </FiltersContainer>
    </Modal>
  )
}