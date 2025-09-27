import axios from 'axios'
import { AuthStatus } from '@/ts/enums/auth.ts'
import { useAuth } from '@/composables/useAuth.ts'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const auth = useAuth()

  if (auth.accessToken) {
    config.headers.Authorization = 'Bearer ' + auth.accessToken
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    const auth = useAuth()

    if (response.data?.status === AuthStatus.NoAuth) {
      auth.logout()
    }

    return response
  },
  (error) => {
    const auth = useAuth()

    if ([ 401, 419 ].includes(error.response.status)) {
      auth.logout()
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
