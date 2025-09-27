const LoginView = () => import('@/views/auth/LoginView.vue')
const TelevisionView = () => import('@/views/television/TelevisionView.vue')
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
    name: 'television',
    path: '/television',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: TelevisionView,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    meta: { layout: 'auth' },
    component: NotFoundView,
  },
]
