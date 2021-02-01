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
    },
    chooseFlight: '',
    limit: 3,
    totalRows: null,
    page: 1
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
    },
    setChooseFlight(state, payload) {
      state.chooseFlight = payload
    },
    handleChangePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    search(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/flight?fromCity=${context.state.params.fromCity}&toCity=${context.state.params.toCity}&flightDate=${context.state.params.flightDate}&clas=${context.state.params.clas}&transitDirect=${context.state.transitDirect}&transit1=${context.state.transit1}&transit2=${context.state.transit2}&food=${context.state.food}&wifi=${context.state.wifi}&luggage=${context.state.luggage}&departureTimeStr=${context.state.deperature.start}&departureTimeEnd=${context.state.deperature.end}&arrivedTimeStr=${context.state.arrive.start}&arrivedTimeEnd=${context.state.arrive.end}&mascapai=${context.state.airline}&priceMin=${context.state.price.min}&priceMax=${context.state.price.max}&sort=${context.state.sort}&page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            context.commit('setSearch', result.data.data)
            context.state.totalRows = result.data.pagination.totalData
            resolve(result.data)
          })
          .catch(error => {
            const data = []
            context.state.totalRows = 0
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
    },
    getChooseFlight(state) {
      return state.chooseFlight
    },
    getPage(state) {
      return state.page
    },
    getLimit(state) {
      return state.limit
    },
    getTotalRow(state) {
      return state.totalRows
    }
  }
}
