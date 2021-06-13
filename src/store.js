import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => {
      console.log(state)
      return state.products.map(p => p);
    }
  },
  mutations: {
    addProduct(state, payload){
      console.log('state', state)
      console.log('payload', payload)
      state.products.push(payload);
      alert(`O produto ${payload.name} foi cadastrado.`);
    }
  },
  actions: {
    addProduct(context, payload){
      context.commit('addProduct', payload);
    }
  }
});