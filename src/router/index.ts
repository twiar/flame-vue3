import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/peoples',
      name: 'peoples',
      component: () => import('@/views/Peoples.vue'),
    },
    {
      path: '/peoples/:id',
      name: 'peoples-single',
      component: () => import('@/views/Peoples/Single.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/Favorites.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: "error-page",
      component: () => import("@/views/ErrorPage.vue"),
    },
  ]
})

export default router
