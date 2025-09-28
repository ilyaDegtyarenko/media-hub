const LoginView = () => import('@/views/auth/LoginView.vue')
const TelevisionView = () => import('@/views/television/TelevisionView.vue')
const ChannelView = () => import('@/views/television/ChannelView.vue')
const MovieListView = () => import('@/views/movie/MovieListView.vue')
const MovieView = () => import('@/views/movie/MovieView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const defaultMeta = {
  requiresAuth: true,
  layout: 'default',
}

const authMeta = {
  requiresAuth: false,
  layout: 'auth',
}

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login',
    meta: authMeta,
    component: LoginView,
  },
  {
    name: 'television',
    path: '/television',
    meta: defaultMeta,
    component: TelevisionView,
    children: [
      {
        name: 'channel',
        path: '/television/:id',
        meta: defaultMeta,
        component: ChannelView,
      },
    ],
  },
  {
    name: 'movie-list',
    path: '/movie',
    meta: defaultMeta,
    component: MovieListView,
  },
  {
    name: 'movie',
    path: '/movie/:id',
    meta: defaultMeta,
    component: MovieView,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    meta: { layout: 'auth' },
    component: NotFoundView,
  },
]
