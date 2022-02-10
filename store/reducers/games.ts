import { GET_GAMES, SELECT_GAME } from '../actions/games'

export interface Game{
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
  selected?: boolean
}

interface GamesState{
  games: Game[]
  min_cart_value: number
}

const initialState: GamesState = {
  games: [],
  min_cart_value: 0
}

export function gamesReducer(state: GamesState = initialState, action: any){
  switch(action.type){
    case GET_GAMES:
      return {
        games: [...action.payload.types],
        min_cart_value: action.payload.min_cart_value
      }

    case SELECT_GAME:
      const id = action.payload
      const selectedGameIndex = state.games.findIndex(game => game.id === id)
      const selectedGame = state.games.find(game => game.id === id)
      selectedGame!.selected = !selectedGame?.selected
      const newState = state.games
      newState.splice(selectedGameIndex, 1, selectedGame!)
      return {
        ...state,
        games: [...newState]
      }

    default:
      return state
  }
}