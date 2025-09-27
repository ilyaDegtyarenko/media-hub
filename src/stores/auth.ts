import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { TokenPayload } from '@/ts/types/auth.ts'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null)
  const expiresIn = ref<number | null>(null)

  const isAuthenticated = computed<boolean>(() => {
    return !!accessToken.value
  })

  const setAuthData = (payload: TokenPayload): void => {
    accessToken.value = payload.access_token
    expiresIn.value = payload.expires_in

    localStorage.setItem('access_token', payload.access_token)
    localStorage.setItem('expires_in', String(payload.expires_in))
  }

  const clearAuthData = (): void => {
    accessToken.value = null
    expiresIn.value = null

    localStorage.removeItem('access_token')
    localStorage.removeItem('expires_in')
  }

  return {
    accessToken,
    expiresIn,

    isAuthenticated,

    setAuthData,
    clearAuthData,
  }
})
