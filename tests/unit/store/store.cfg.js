import vuex from "@/store/modules/tasks.js";

export default {
  state: {
    tasks: [],
  },
  mutations: vuex.mutations,
  getters: vuex.getters
}