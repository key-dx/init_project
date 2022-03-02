import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedState()]

  // 设置sessionStorage
  //   plugins: [
  //     persistedState({ storage: window.sessionStorage })
  // ]

  // 设置cookie 
  // plugins: [
  //   persistedState({
  //     storage: {
  //       getItem: key => Cookies.get(key),
  //       setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
  //       removeItem: key => Cookies.remove(key)
  //     }
  //   })
  // ]
})
