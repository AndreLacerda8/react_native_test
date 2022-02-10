import { GET_GAMES } from '../actions/games'

interface Game{
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
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

    default:
      return state
  }
}