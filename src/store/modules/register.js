import axios from 'axios'

export default {
  modules: {},
  state: {
    page: 'register'
  },
  mutations: {
    setPage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/register`, payload)
          .then(result => {
            const type = 'login'
            context.commit('setPage', type)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    forgotPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/user/forgot`, payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    typePage(state) {
      return state.page
    }
  }
}
