export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/main/index.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        // 标记当前的页面只有用户登录之后才可以进入
        meta: {
          user: true,
        },
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('@/views/member/index.vue'),
        // 标记当前的页面只有用户登录之后才可以进入
        meta: {
          user: true,
        },
      },
      {
        path: '/pay/result',
        name: 'payResult',
        component: () => import('@/views/pay/index.vue'),
        // 标记当前的页面只有用户登录之后才可以进入
        meta: {
          user: true,
        },
      },
    ],
  },
  {
    path: '/pins/:id',
    name: 'pins',
    component: () => import('@/views/pins/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-register/login/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login-register/register/index.vue'),
  },
]
