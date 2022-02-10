import axios, { AxiosError } from 'axios'
import { useSelector } from 'react-redux'

export const api = axios.create({
  baseURL: 'http://192.168.2.149:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// api.interceptors.request.use(async config => {
//   // @ts-expect-error
//   const token = useSelector(state => state.user.token.token)
//   if(token){
//     config.headers!.Authorized = 'Bearer ' + token
//   }
//   return config
// }, function (error){
//   return Promise.reject(error)
// })

api.interceptors.response.use(
  async (response) => {
    return response
  },
  function (error: AxiosError) {
    if(error.response){
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message || error.response.data.error.message,
      })
    }
    return Promise.reject(error)
  }
)
