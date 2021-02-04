import axios from 'axios'

export default {
  state: {
    flight: {},
    flightDetail: {},
    booking: {},
    allBooking: [],
    bookingId: null
  },
  mutations: {
    setFlight(context, payload) {
      context.flight = payload
    },
    setFlightDetail(context, payload) {
      context.flightDetail = payload
    },
    setBooking(context, payload) {
      context.booking = payload
    },
    setAllBooking(context, payload) {
      context.allBooking = payload
    },
    setBookingId(context, payload) {
      context.bookingId = payload
    }
  },
  actions: {
    postBooking(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/booking/book`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getFlightById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/flight/${payload}`)
          .then(result => {
            context.commit('setFlightDetail', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getAllBooking(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/booking`)
          .then(result => {
            context.commit('setAllBooking', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getBookingByUserId(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/booking/${payload}`)
          .then(result => {
            console.log(result.data.data)
            context.commit('setBooking', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchFlightCapacity(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_PORT}/flight`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchBookingStatus(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/booking/book/?userId=${payload.userId}&id=${payload.id}`,
            payload
          )
          .then(result => {
            resolve(result.data.msg)
          })
          .catch(error => {
            console.log(error)
            reject(error.response.msg)
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
    },
    getBooking(state) {
      return state.booking
    },
    getAllBooking(state) {
      return state.allBooking
    },
    getBookingId(state) {
      return state.bookingId
    }
  }
}
