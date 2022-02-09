export const USER_LOGIN = 'USER_LOGIN'
export const SIGNUP_USER = 'SIGNUP_USER'

interface LoginData {
  email: string
  password: string
}

export function loginUser({ email, password }: LoginData){
  return (dispatch: any) => {

    dispatch({
      type: USER_LOGIN,
      payload: {email, password}
    })
  }
}
