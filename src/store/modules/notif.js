import axios from 'axios'

export default {
  state: {
    notif: []
  },
  mutations: {
    setNotif(state, payload) {
      state.notif = payload
    },
    clearNotif(state) {
      state.notif = []
    }
  },
  actions: {
    getNotifByUserId(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/notif/${payload}`)
          .then(result => {
            context.commit('setNotif', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    deleteNotifByUserId(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_PORT}/notif/${payload}`)
          .then(result => {
            context.commit('clearNotif')
            resolve(result.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    }
  },
  getters: {
    getterNotif(state) {
      return state.notif
    }
  }
}
