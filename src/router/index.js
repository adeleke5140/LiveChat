import { createRouter, createWebHistory } from "vue-router";
import ChatRoomVue from "../views/ChatRoom.vue";
import ProfileVue from "../views/Profile.vue";
import WelcomeVue from "../views/Welcome.vue";

//add route guard

import { auth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({
      name: "welcome",
    });
  } else {
    next();
  }
};

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
      beforeEnter: requireAuth,
    },
  ],
});

export default router;
