import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

createApp(App).use(createBootstrap()).mount("#app");
