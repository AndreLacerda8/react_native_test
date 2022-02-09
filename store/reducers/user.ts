import { USER_LOGIN } from '../actions/user'

interface UserState{
  name: string
}

const initialState: UserState = {
  name: ''
}

export function userReducer(state: UserState = initialState, action: any){
  switch(action.type){
    case USER_LOGIN:
      console.log(action.payload)
      return {
        ...state
      }

    default:
      return state
  }
}
