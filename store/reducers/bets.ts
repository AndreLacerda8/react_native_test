import { GET_BETS } from '../actions/bets'

export interface Bet{
  id: number
  user_id: number
  game_id: number
  choosen_numbers: string
  price: number
  created_at: string
  type: {
    id: number
    type: string
  }
}

interface BetsState{
  bets: Bet[]
}

const initialState: BetsState = {
  bets: [],
}

export function betsReducer(state: BetsState = initialState, action: any){
  switch(action.type){
    case GET_BETS:
      return {
        bets: [...action.payload]
      }
    default:
      return state
  }
}