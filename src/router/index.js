import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/dashboard-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login-view.vue'),
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/callback-view.vue'),
    },
  ],
})

export default router
