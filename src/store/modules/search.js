import axios from 'axios'

export default {
  modules: {},
  state: {
    params: '',
    sort: '',
    dataSearch: [],
    transitDirect: '',
    transit1: '',
    transit2: '',
    airline: '',
    food: '',
    wifi: '',
    luggage: '',
    deperature: {
      start: '',
      end: ''
    },
    arrive: {
      start: '',
      end: ''
    },
    price: {
      min: '',
      max: ''
    }
  },
  mutations: {
    setSearch(state, payload) {
      state.dataSearch = payload
    },
    setParams(state, payload) {
      state.params = payload
    },
    setTransitDirect(state, payload) {
      state.transitDirect = payload
    },
    setTransit1(state, payload) {
      state.transit1 = payload
    },
    setTransit2(state, payload) {
      state.transit2 = payload
    },
    setAirline(state, payload) {
      state.airline = payload
    },
    setFood(state, payload) {
      state.food = payload
    },
    setWifi(state, payload) {
      state.wifi = payload
    },
    setLuggage(state, payload) {
      state.luggage = payload
    },
    setDeperature(state, payload) {
      state.deperature.start = payload.start
      state.deperature.end = payload.end
    },
    setArrive(state, payload) {
      state.arrive.start = payload.start
      state.arrive.end = payload.end
    },
    setPrice(state, payload) {
      state.price.min = payload.min
      state.price.max = payload.max
    },
    sortBy(state, payload) {
      state.sort = payload
    }
  },
  actions: {
    search(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/flight?fromCity=${context.state.params.fromCity}&toCity=${context.state.params.toCity}&flightDate=${context.state.params.flightDate}&clas=${context.state.params.clas}&transitDirect=${context.state.transitDirect}&transit1=${context.state.transit1}&transit2=${context.state.transit2}&food=${context.state.food}&wifi=${context.state.wifi}&luggage=${context.state.luggage}&departureTimeStr=${context.state.deperature.start}&departureTimeEnd=${context.state.deperature.end}&arrivedTimeStr=${context.state.arrive.start}&arrivedTimeEnd=${context.state.arrive.end}&mascapai=${context.state.airline}&priceMin=${context.state.price.min}&priceMax=${context.state.price.max}&sort=${context.state.sort}`
          )
          .then(result => {
            context.commit('setSearch', result.data.data)
            console.log(result.data.data)
            resolve(result.data.data)
          })
          .catch(error => {
            const data = []
            context.commit('setSearch', data)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getSearch(state) {
      return state.dataSearch
    },
    getParams(state) {
      return state.params
    },
    getFilter(state) {
      return state.filter
    }
  }
}
