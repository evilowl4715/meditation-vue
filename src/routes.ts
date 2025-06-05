import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/auth.store";

export const router = createRouter({
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("@/views/StartView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/AuthView.vue"),
    },
    {
      path: "/meditation",
      name: "meditation",
      component: () => import("@/views/MeditationView.vue"),
    },
    {
      path: "/statistics",
      component: () => import("@/views/StatisticsView.vue"),
    },
    {
      path: "/timer",
      name: "timer",
      component: () => import("@/views/TimerView.vue"),
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name !== "auth") {
    return { name: "auth" };
  }
});
