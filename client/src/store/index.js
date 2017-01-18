import Vue from 'vue';
import Vuex from 'vuex';
import { fetchCategories, fetchProducts } from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoaded: false,
    user: {
      id: 1234,
      name: 'Trent'
    },
    categories: [],
    products: []
  },
  getters: {
    getCategories: state => {
      return state.categories;
    }
  },
  mutations: {
    SET_CATEGORIES:  (state, json ) => {
      state.categories = json.categories;
    },
    SET_PRODUCTS:  (state, json ) => {
      state.products = json.products;
    }
  },
  actions: {
    FETCH_CATEGORIES: ({ commit, state }) => {
      if (!state.isLoaded) {
        return fetchCategories()
          .then(json => {
            commit('SET_CATEGORIES', json)
          })
      } else {
        return Promise.resolve()
      }
    },
    FETCH_PRODUCTS: ({ commit, state }) => {
      if (!state.isLoaded) {
        return fetchProducts()
          .then(json => {
            commit('SET_PRODUCTS', json)
          })
      } else {
        return Promise.resolve()
      }
    }
  }
});