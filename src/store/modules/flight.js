import axios from 'axios'

export default {
  modules: {},
  state: {},
  mutations: {},
  actions: {
    postFlight(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/flight`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
