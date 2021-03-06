import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    categories: null,
    error: false,
    cart: [],
    itemCart: {
      id: 0,
      name: "",
      price: 0,
      quantity: 0,
    }
  },
  mutations: {
    getProducts(state, payload) {
      if (payload[0] === "error") {
        state.error = true;
      } else {
        state.products = payload;
      } 
    },
    getCategories(state, payload) {
      if (payload[0] === "error") {
        state.error = true;
      } else {
        state.categories = payload;
      } 
    },
    incrementQuantity(state, payload){
      payload.quantity++
    },
    addToCart(state, payload){
      state.cart.push({
        id: payload.id,
        quantity: 1
      })
    },
    removeToCart: (state, payload) => {
      state.cartProducts.splice(payload, 1);
    },
    find(state, payload){
      state.products = state.products.filter(item => item.name === payload)
    },
  },
  actions: {
    getProducts: ({commit}) => {
      api.getProducts().then(data => {
        commit("getProducts", data);
      });
    },
    getCategories: ({commit}) => {
      api.getCategories().then(data => {
        commit("getCategories", data);
      });
    },
    addToCart({commit, state}, product){
      const item = state.cart.find(item => item.id === product.id)
      
      if(item){
        commit('incrementQuantity', item)
      }else{
        commit('addToCart', product)
      }

    },
    removeToCart: ({commit}, index) => {
      commit('removeToCart', index);
    },
    find({commit}, q){
      commit('find', q)
    },
  },
  getters: {
    productsOnCart(state) {
      return state.cart.map(item => {
        const product = state.products.find(
          product => product.id === item.id
        );
        return {
          name: product.name,
          price: product.price,
          quantity: item.quantity
        };
      });
    },
    cartTotal(state, getters) {
      return getters.productsOnCart.reduce((total, current) => total + current.price * current.quantity, 0)
    },
    totalQuantity(state, getters){
      return getters.productsOnCart.reduce((quantity, current) => quantity + current.quantity, 0)
    }
    
  },
  modules: {
  }
})
