import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const state = {
  user: null,
  admin: null,
  token: null,
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
    token: (state) => {
      return state.token;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    admin(context, admin) {
      context.commit("admin", admin);
    },
    token(context, token) {
      context.commit("token", token);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    admin(state, admin) {
      state.admin = admin;
    },
    token(state, token) {
      state.token = token;
    },
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});

export default store;
