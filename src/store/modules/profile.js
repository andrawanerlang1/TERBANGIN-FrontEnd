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
            `http://localhost:3000/user/update/image/${payload.userId}`,
            payload.user_data
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
    }
  },
  getters: {
    getProfile(state) {
      return state.profile
    },
    setProfile(state) {
      console.log(state)
      return state.profile
    },
    seUser(state) {
      return state.user
    }
  }
}
