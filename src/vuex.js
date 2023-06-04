import Vuex from "vuex";

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
});

export default store;
