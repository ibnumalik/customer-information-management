import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
  },
  mutations: {
    updateCustomer(state, customers) {
      state.customers = [...state.customers, ...customers];
    },
  },
  actions: {},
  modules: {},
});
