import { Button, Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { selectGame } from '../../store/actions/games'
import { Game } from '../../store/reducers/games'

const FiltersContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

interface IPropsButton{
  color: string
  selected: boolean | undefined
}

const FilterButton = styled.TouchableOpacity<IPropsButton>`
  margin-left: 10px;
  margin-bottom: 20px;
  min-width: 150px;
  padding: 10px 20px;
  border: 2px solid ${props => props.color};
  border-radius: 100px;
  background-color: ${props => props.selected ? props.color : 'transparent'};
`

const FilterButtonText = styled.Text<IPropsButton>`
  color: ${props => props.selected ? '#fff' : props.color};
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
  // @ts-expect-error
  const games = useSelector(state => state.games.games)
  const dispatch = useDispatch()

  return (
    <Modal
      animationType="slide"
      visible={visible} 
    >
      <FiltersContainer>
        {games.map((game: Game) => (
          <FilterButton selected={game.selected} onPress={() => dispatch(selectGame(game.id))} key={game.id} color={game.color}>
            <FilterButtonText selected={game.selected} color={game.color}>{game.type}</FilterButtonText>
          </FilterButton>
        ))}
        <Button title='Back' onPress={onClose} />
      </FiltersContainer>
    </Modal>
  )
}