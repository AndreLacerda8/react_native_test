import { api } from '../../services/axios.config'

export const USER_LOGIN = 'USER_LOGIN'
export const SIGNUP_USER = 'SIGNUP_USER'

interface LoginData {
  email: string
  password: string
}

interface SignupData {
  name: string
  email: string
  password: string
}

export function loginUser({ email, password }: LoginData){
  return async (dispatch: any) => {
    try {
      const { data } = await api.post('/login', {
        email: email,
        password: password
      })
      dispatch({
        type: USER_LOGIN,
        payload: data
      })
    } catch(error: any){
      throw new Error(error.message)
    }
  }
}

export function signupUser({ name, email, password }: SignupData){
  return async (dispatch: any) => {
    try {
      const { data } = await api.post('/user/create', {
        name,
        email,
        password
      })
      dispatch({
        type: SIGNUP_USER,
        payload: data
      })
    } catch(error: any){
      throw new Error(error.message)
    }
  }
}
