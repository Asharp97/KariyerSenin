import { useAuthStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getUser() {
      const response = await axios.get("user");
      this.authUser = response.data;
    },
  },
});
