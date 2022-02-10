import { api } from '../../services/axios.config'

export const GET_GAMES = 'GET_GAMES'

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