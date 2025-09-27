const LoginView = () => import('@/views/auth/LoginView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      requiresAuth: false,
      layout: 'auth',
    },
    component: LoginView,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    meta: { layout: 'auth' },
    component: NotFoundView,
  },
]
