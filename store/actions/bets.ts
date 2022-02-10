import { api } from '../../services/axios.config'

export const GET_BETS = 'GET_BETS'

export function getBets(token: string, gamesSelected?: string[]){
  return async (dispatch: any) => {
    try {
      let query
      if(gamesSelected){
        const formatedSelected = gamesSelected.map(selected => 'type[]=' + selected)
        query = formatedSelected.join('&')
      }
      const { data } = await api.get(query ? `/bet/all-bets?${query}` : '/bet/all-bets', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      dispatch({
        type: GET_BETS,
        payload: data
      })
    } catch(error: any){
      throw new Error(error.message)
    }
  }
}