import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ChatRoom from "./components/ChatRoom.vue";
import UserSelection from "./components/UserSelection.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: UserSelection },
  { path: "/:name", component: ChatRoom, props: true },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
