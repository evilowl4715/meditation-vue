import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/MeditationView.vue'),
    },
    {
      path: '/statistics',
      component: () => import('./views/StatisticsView.vue'),
    },
  ],
  history: createWebHistory(),
})
