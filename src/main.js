import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App);

    app.use(router);

    app.mount("#app");
  }
});
