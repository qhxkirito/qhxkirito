// src/routers/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 引入 RouteRecordRaw 类型以提供内容的校验与提示
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/sys/login/Login.vue'),
    meta: {
      title: '主页',
    },
    // children: [
    //   {
    //     path: 'list',
    //     name: 'ListPage',
    //     component: () => import('@/views/Home/List/index.vue'),
    //     meta: {
    //       title: '列表页',
    //     },
    //   },
    // ],
  },
]

// new Router 变成了 createRouter
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes,
})

export default router