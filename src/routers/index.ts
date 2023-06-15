import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/index.vue'

export const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
  ]
})

export { routers }
