import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:5000/api',
})

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token') || '')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

export default instance
