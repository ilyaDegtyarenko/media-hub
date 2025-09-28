const LoginView = () => import('@/views/auth/LoginView.vue')
const TelevisionView = () => import('@/views/television/TelevisionView.vue')
const ChannelView = () => import('@/views/television/ChannelView.vue')
const MovieView = () => import('@/views/movie/MovieView.vue')
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
    children: [
      {
        name: 'channel',
        path: '/television/:id',
        meta: {
          requiresAuth: true,
          layout: 'default',
        },
        component: ChannelView,
      },
    ],
  },
  {
    name: 'movie',
    path: '/movie',
    meta: {
      requiresAuth: true,
      layout: 'default',
    },
    component: MovieView,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    meta: { layout: 'auth' },
    component: NotFoundView,
  },
]
