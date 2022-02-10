import { api } from '../../services/axios.config'

export const GET_GAMES = 'GET_GAMES'
export const SELECT_GAME = 'SELECT_GAME'

export function getGames(){
  return async (dispatch: any) => {
    try {
      const { data } = await api.get('/cart_games')
      dispatch({
        type: GET_GAMES,
        payload: data
      })
    } catch(error: any){
      throw new Error(error.message)
    }
  }
}

export function selectGame(game_id: number){
  return {
    type: SELECT_GAME,
    payload: game_id
  }
}