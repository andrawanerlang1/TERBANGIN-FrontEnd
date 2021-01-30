import axios from 'axios'

export default {
  state: {
    admin: [],
    chatActive: {},
    chatMode: false,
    messages: [],
    messagesHistory: [],
    activeRoom: null,
    chatRoom: []
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
    setActiveRoom(state, payload) {
      state.activeRoom = payload
    },
    clearMessages(state) {
      state.messages = []
      state.messagesHistory = []
    },
    setChatRoom(state, payload) {
      state.chatRoom = payload
    },
    pushMessages(state, payload) {
      state.messages.push(payload)
    },
    setMessagesHistory(state, payload) {
      state.messagesHistory = payload
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
            context.commit('setActiveRoom', result.data.data[0].roomIdUniq)
            resolve(result.data.data[0].roomIdUniq)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    getChatRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/chat/room/${payload}`)
          .then(result => {
            context.commit('setChatRoom', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    sendMessages(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/chat/message`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    getMessagesHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/chat/message/${payload}`)
          .then(result => {
            context.commit('setMessagesHistory', result.data.data)
            resolve(result)
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
    },
    getterChatMode(state) {
      return state.chatMode
    },
    getterChatActive(state) {
      return state.chatActive
    },
    getterActiveRoom(state) {
      return state.activeRoom
    },
    getChatRoom(state) {
      return state.chatRoom
    },
    getterMessages(state) {
      return state.messages
    },
    getterMessagesHistory(state) {
      return state.messagesHistory
    }
  }
}
