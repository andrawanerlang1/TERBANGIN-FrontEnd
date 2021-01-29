import Vue from 'vue'
import Vuex from 'vuex'
import Profile from './modules/profile'
import Register from './modules/register'
import Auth from './modules/auth'
import Booking from './modules/auth'
import Chat from './modules/chat'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Register, Auth, Booking, Profile, Chat },
  getters: {},
  plugins: [
    createPersistedState({
      path: ['Auth.user']
    })
  ]
})
