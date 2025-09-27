import { useAuthStore } from '@/stores/auth.ts'

export const useAuth = () => {
  const authStore = useAuthStore()

  const logout = (): void => {
    authStore.clearAuthData()

    location.reload()
  }

  return {
    logout,
    ...authStore,
  }
}
