import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.2.149:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.response.use(
  async (response) => {
    return response
  },
  function (error: AxiosError) {
    if(error.response){
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message,
      })
    }
    return Promise.reject(error)
  }
)
