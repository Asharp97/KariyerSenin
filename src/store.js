import { defineStore } from "pinia";

export const useStore = defineStore("pinia", {
  state: () => ({
    user: null,
    admin: null,
    token: "",
    state: "",
    position: "",
  }),
  persist: true,
});
