import axios from 'axios'

export default {
  state: {
    flight: {},
    flightDetail: {}
  },
  mutations: {
    setFlight(context, payload) {
      context.flight = payload
    },
    setFlightDetail(context, payload) {
      context.flightDetail = payload
    }
  },
  actions: {
    postBooking(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/booking/book`, payload)
          .then(result => {
            console.log(result)
            console.log('ini result')
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            console.log('ini error')
            reject(error.response)
          })
      })
    },
    getFlightById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/flight/${payload}`)
          .then(result => {
            console.log(result.data.data[0])
            context.commit('setFlightDetail', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getFlight(state) {
      return state.flight
    },
    getFlightDetail(state) {
      return state.flightDetail
    }
  }
}
