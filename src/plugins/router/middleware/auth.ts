import type { RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth.ts'

export default (to: RouteLocationNormalized) => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated && (to.meta.requiresAuth === false)) {
    return { name: 'television' }
  }

  if (!authStore.isAuthenticated && (to.meta.requiresAuth === true)) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }
}
