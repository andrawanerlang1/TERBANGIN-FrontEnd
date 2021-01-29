import Vue from 'vue'
import Vuex from 'vuex'
import Profile from './modules/profile'
import Register from './modules/register'
import Auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Register, Auth, Profile },
  getters: {},
  plugins: [
    createPersistedState({
      path: ['Auth.user']
    })
  ]
})
