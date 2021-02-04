import axios from 'axios'

export default {
  state: {
    profile: '',
    form: {
      email: '',
      fullName: '',
      phoneNumber: '',
      city: '',
      nationality: '',
      postCode: ''
    }
  },
  mutations: {
    setUserProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/user/${payload}`)
          .then(response => {
            context.commit('setUserProfile', response.data.data[0])
            resolve(response.data.data[0])
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    patchUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/settings/${payload.id}`,
            payload.data
          )
          .then(response => {
            console.log(response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    patchProfilePict(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/img/${context.state.profile.userId}`,
            payload
          )
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response.msg)
          })
      })
    },
    deleteProfilePict(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/user/delete/image/${payload.userId}`
          )
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    changePassword(constext, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_PORT}/user/changePassword`, payload)
          .then(response => {
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    }
  },
  getters: {
    setProfile(state) {
      console.log(state)
      return state.profile
    },
    seUser(state) {
      return state.user
    }
  }
}
