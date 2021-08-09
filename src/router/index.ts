// src/routers/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 引入 RouteRecordRaw 类型以提供内容的校验与提示
const routes: RouteRecordRaw[] = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/sys/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'layouts',
    component: () => import('@/layouts/default/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'list',
        name: 'ListPage',
        component: () => import('@/views/sys/login/Login.vue'),
        meta: {
          title: '列表页',
        },
      },
    ],
  },
]

// new Router 变成了 createRouter
const router = createRouter({
  // history
  history: createWebHistory(),
  routes,
})

export default router