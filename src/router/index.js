import { createRouter, createWebHistory } from "vue-router";
import ChatRoomVue from "../views/ChatRoom.vue";
import ProfileVue from "../views/Profile.vue";
import WelcomeVue from "../views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeVue,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileVue,
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: ChatRoomVue,
    },
  ],
});

export default router;
