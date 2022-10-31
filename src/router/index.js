import { createRouter, createWebHistory } from "vue-router";
import ChatRoomVue from "../views/ChatRoom.vue";
import ProfileVue from "../views/Profile.vue";
import WelcomeVue from "../views/Welcome.vue";
import HomeVue from "../views/Home.vue";

import { auth } from "../firebase/config";
import Account from "../views/Account.vue";

//add route guard
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

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (user) {
    next({
      name: "home",
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
      beforeEnter: requireNoAuth,
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
    {
      path: "/home",
      name: "home",
      component: HomeVue,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
  ],
});

export default router;
