import Vue from 'vue'
import Vuex from 'vuex'
import Register from './modules/register'
import Auth from './modules/auth'
import Booking from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Register, Auth, Booking },
  getters: {},
  plugins: [
    createPersistedState({
      path: ['Auth.user']
    })
  ]
})
