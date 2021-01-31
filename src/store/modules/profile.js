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
          .get(`http://localhost:3000/user/${payload}`)
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
            `http://localhost:3000/user/settings/${payload.id}`,
            payload.data
          )
          .then(response => {
            console.log(response.data.data)
            context.commit('setUserProfile', response.data.data)
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    patchProfilePict(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/user/img/${payload.userId}`,
            payload.payload.data
          )
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response.data.message)
          })
      })
    },
    deleteProfilePict(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:3000/user/delete/image/${payload.userId}`)
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
          .patch(`http://localhost:3000/user/changePassword`, payload)
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
