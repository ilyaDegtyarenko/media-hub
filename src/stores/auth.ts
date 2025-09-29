import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type SetAuthDataPayload = {
  access_token: string
  expires_at: number
}

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null)
  const expiresAt = ref<number | null>(null)

  const isTokenExpired = computed<boolean>(() => {
    if (!accessToken.value || !expiresAt.value) {
      return true
    }

    return Date.now() >= expiresAt.value
  })

  const isAuthenticated = computed<boolean>(() => {
    return !!accessToken.value && !isTokenExpired.value
  })

  const setAuthData = (payload: SetAuthDataPayload): void => {
    accessToken.value = payload.access_token
    expiresAt.value = payload.expires_at

    localStorage.setItem('access_token', payload.access_token)
    localStorage.setItem('expires_at', String(payload.expires_at))
  }

  const clearAuthData = (): void => {
    accessToken.value = null
    expiresAt.value = null

    localStorage.removeItem('access_token')
    localStorage.removeItem('expires_at')
  }

  return {
    accessToken,
    expiresAt,

    isAuthenticated,
    isTokenExpired,

    setAuthData,
    clearAuthData,
  }
})
