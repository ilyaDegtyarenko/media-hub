import axiosInstance from '@/api/axiosInstance'
import authApi from '@/api/endpoints/auth.api'
import type { AxiosResponse } from 'axios'
import type { LoginResponse } from '@/ts/types/auth.ts'

export const authService = {
  login: (refreshToken: string): Promise<AxiosResponse<LoginResponse>> => {
    return authApi(axiosInstance).login(refreshToken)
  },
}
