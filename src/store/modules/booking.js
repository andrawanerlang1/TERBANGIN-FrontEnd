export default {
  state: {},
  mutataions: {},
  actions: {
    postBooking(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/booking/book`, payload)
          .then(result => {
            console.log(result)
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
