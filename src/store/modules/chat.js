import axios from 'axios'

export default {
  state: {
    admin: [],
    chatActive: {},
    chatMode: false,
    messages: [],
    messagesHistory: []
  },
  mutations: {
    setAdminRoom(state, payload) {
      state.admin = payload
    },
    setChatActive(state, payload) {
      state.chatActive = payload
    },
    setChatMode(state, payload) {
      state.chatMode = payload
    },
    clearMessages(state) {
      state.messages = []
      state.messagesHistory = []
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
    },
    changeChatActive(context, payload) {
      context.commit('setChatActive', payload)
      context.commit('setChatMode', true)
    },
    getRoomId(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/chat/rooms?sender=${payload.sender}&receiver=${payload.receiver}`
          )
          .then(result => {
            resolve(result.data.data[0].roomIdUniq)
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
