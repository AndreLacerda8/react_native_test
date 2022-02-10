import { SIGNUP_USER, USER_LOGIN } from '../actions/user'

interface UserState{
  token: any
  user: any
}

const initialState: UserState = {
  token: {},
  user: {}
}

export function userReducer(state: UserState = initialState, action: any){
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        token: {...action.payload.token},
        user: {...action.payload.user}
      }

    case SIGNUP_USER:
      return {
        ...state,
        token: {...action.payload.token},
        user: {...action.payload.user}
      }

    default:
      return state
  }
}
