import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      growers: [],
    },
    mutations: {
      addGrower(state, grower) {
        state.growers.push(grower);
      },
      addGrowers(state, growers) {
        state.growers = growers;
      }
    },
    getters: {
      growers: state => state.growers,
    }
});
