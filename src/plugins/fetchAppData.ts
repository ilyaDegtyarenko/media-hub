import { useAuthStore } from '@/stores/auth.ts'

export default async (): Promise<void> => {
  const authStore = useAuthStore()

  const accessToken = localStorage.getItem('access_token')
  const expiresIn = localStorage.getItem('expires_in')

  if (accessToken && expiresIn) {
    authStore.setAuthData({
      access_token: accessToken,
      expires_in: +expiresIn,
    })
  }
}
