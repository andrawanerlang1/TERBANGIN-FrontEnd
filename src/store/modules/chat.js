import axios from 'axios'

export default {
  state: {
    admin: []
  },
  mutations: {
    setAdminRoom(state, payload) {
      state.admin = payload
    }
  },
  actions: {
    getAdminList(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/chat/admin`)
          .then(result => {
            context.commit('setAdminRoom', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    createRoomChat(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/chat/room`, payload)
          .then(result => {
            resolve(result.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    }
  },
  getters: {
    getterAdmin(state) {
      return state.admin
    }
  }
}
