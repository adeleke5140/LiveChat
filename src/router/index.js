import { createRouter, createWebHistory } from "vue-router";
import WelcomeVue from "../views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeVue,
    },
  ],
});

export default router;
