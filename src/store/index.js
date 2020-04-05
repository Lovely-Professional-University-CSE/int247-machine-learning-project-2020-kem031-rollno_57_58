import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    executionResult: {
      detailed: [
        {
          algorithm: "Random Forest",
          result: "Fraud",
          accuracy: "99.8",
          runtime: "897",
        },
        {
          algorithm: "Random Forest",
          result: "Fraud",
          accuracy: "99.8",
          runtime: "897",
        },
      ],
      result: "Not Fraud",
    },

    executed: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
