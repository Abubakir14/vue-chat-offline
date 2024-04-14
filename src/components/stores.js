// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      users: [
        { name: "Jack", status: "*out*", messages: [] },
        { name: "BIBER", status: "*meter*", messages: [] },
        { name: "NEDO", status: "*mimo*", messages: [] },
      ],
    },
    mutations: {
      removeUser(state, userToRemove) {
        state.users = state.users.filter((user) => user !== userToRemove);
      },
      addMessage(state, { user, message }) {
        const targetUser = state.users.find(u => u.name === user.name);
        if (targetUser) {
          targetUser.messages.push(message);
        }
      }
    },
  });
  