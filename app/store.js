import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    details: {
      fname: null,
      lname: null,
      mail: null,
      phone: null,
      country: null,
      zipCode: null,
      city: null,
      address: null
    },
  },

  mutations: {
  },
  
  getters: {
    getCheckoutDetails() {
      return details
    }

  },
  actions: {

  }
});
