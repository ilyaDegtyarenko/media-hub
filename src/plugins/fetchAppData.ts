import { useAuthStore } from '@/stores/auth.ts'

export default async (): Promise<void> => {
  const authStore = useAuthStore()

  const accessToken = localStorage.getItem('access_token')
  const expiresAt = localStorage.getItem('expires_at')

  if (!accessToken || !expiresAt) {
    return
  }

  authStore.setAuthData({
    access_token: accessToken,
    expires_at: +expiresAt,
  })

  if (authStore.isTokenExpired) {
    authStore.clearAuthData()
  }
}
