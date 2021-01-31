import Vue from 'vue'
import Vuex from 'vuex'
import Profile from './modules/profile'
import Register from './modules/register'
import Auth from './modules/auth'
import Search from './modules/search'
import Booking from './modules/booking'
import Chat from './modules/chat'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Register, Auth, Booking, Profile, Search, Chat },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
