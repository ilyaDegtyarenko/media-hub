import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'
import authMiddleware from './middleware/auth'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(authMiddleware)

export default router
