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
  { path: "/chat", name: "chat", component: ChatRoom, props: true },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// Добавляем логику для сохранения пользователей при первом запуске
const users = [
  { name: "Jack", status: "*out*", messages: [] },
  { name: "BIBER", status: "*meter*", messages: [] },
  { name: "NEDO", status: "*mimo*", messages: [] },
  { name: "Manu", status: "*mimo*", messages: [] },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
