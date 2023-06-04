import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

const state = {
  user: null,
  admin: null,
};

const store = new Vuex.Store({
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    admin: (state) => {
      return state.admin;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    admin(context, admin) {
      context.commit("admin", admin);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    admin(state, admin) {
      state.admin = admin;
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
});

export default store;
