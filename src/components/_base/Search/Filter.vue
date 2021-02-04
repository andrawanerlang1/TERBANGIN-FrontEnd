<template>
  <div class="mainWrapper">
    <div class="filter">
      <div style="font-weight:bold; font-size: 20px">Filter</div>
      <div style="color:#2395FF;font-weight:600" @click="reset">Reset</div>
    </div>
    <div class="filterCard">
      <div class="transit">
        <b-navbar toggleable>
          Transit
          <b-navbar-toggle target="Transit">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Transit" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Direct</div>
                <div class="checkbox">
                  <input type="checkbox" @change="filterTransitDirect(1)" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Transit</div>
                <div class="checkbox">
                  <input type="checkbox" @change="filterTransit1(1)" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Transit 2+</div>
                <div class="checkbox">
                  <input type="checkbox" @change="filterTransit2(1)" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="facilities">
        <b-navbar toggleable>
          Facilities
          <b-navbar-toggle target="Facilities">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Facilities" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Luggage</div>
                <div class="checkbox">
                  <input type="checkbox" @click="filterLuggage(1)" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">In-Flight Meal</div>
                <div class="checkbox">
                  <input type="checkbox" @click="filterFood(1)" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Wi-fi</div>
                <div class="checkbox">
                  <input type="checkbox" @click="filterWifi(1)" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="departure" style="font-size:16px">
        <b-navbar toggleable>
          Departure Time
          <b-navbar-toggle target="Departure">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Departure" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">00:00 - 06:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterDeperature('00:00', '06:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">06:00 - 12:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterDeperature('06:00', '12:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">12:00 - 18:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterDeperature('12:00', '18:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">18:00 - 24:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterDeperature('18:00', '24:00')"
                  />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="arrive">
        <b-navbar toggleable>
          Time Arrived
          <b-navbar-toggle target="Arrived">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Arrived" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">00:00 - 06:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterArrive('00:00', '06:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">06:00 - 12:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterArrive('06:00', '12:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">12:00 - 18:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterArrive('12:00', '18:00')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">18:00 - 24:00</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    @click="filterArrive('18:00', '24:00')"
                  />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="airlines">
        <b-navbar toggleable>
          Airlines
          <b-navbar-toggle target="Airlines">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Airlines" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Garuda Indonesia</div>
                <div class="checkbox">
                  <input
                    type="checkbox"
                    value="Garuda Indonesia"
                    @change="filterMascapai('Garuda Indonesia')"
                  />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Air Asia</div>
                <div class="checkbox">
                  <input type="checkbox" @change="filterMascapai('air asia')" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Lion Air</div>
                <div class="checkbox">
                  <input type="checkbox" @change="filterMascapai('Lion Air')" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="ticket">
        <b-navbar toggleable>
          Ticket Price
          <b-navbar-toggle target="Price">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Price" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="pricetag" style="color:grey">
                <div style="font-weight:300">Lowest</div>
                <div style="font-weight:300">Highest</div>
              </div>
              <div
                class="app-content"
                style="margin-top:10px;margin-bottom:20px"
              >
                <vue-slider
                  ref="slider"
                  v-model="price"
                  v-bind="slideOption"
                  @change="filterPrice"
                ></vue-slider>
              </div>
              <div class="pricetag">
                <div>IDR {{ price[0] }}</div>
                <div>IDR {{ price[1] }}</div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Filter',
  data() {
    return {
      mascapai: [],
      price: [350000, 1300000],
      slideOption: {
        min: 350000,
        max: 1300000
      },
      transit: {
        direct: '',
        transit1: '',
        transit2: '',
        food: '',
        luggage: '',
        wifi: '',
        airline: ''
      },
      departure: {
        start: '',
        end: ''
      },
      arrive: {
        start: '',
        end: ''
      }
    }
  },
  created() {
    this.reset()
  },
  computed: {
    ...mapGetters(['getSearch'])
  },
  methods: {
    ...mapActions(['search']),
    ...mapMutations([
      'setAirline',
      'setTransitDirect',
      'setTransit1',
      'setTransit2',
      'setFood',
      'setWifi',
      'setLuggage',
      'setDeperature',
      'setArrive',
      'setPrice',
      'handleChangePage'
    ]),
    reset() {
      this.setTransitDirect('')
      this.setTransit1('')
      this.setTransit2('')
      this.setFood('')
      this.setWifi('')
      this.setLuggage('')
      this.setAirline('')
      this.setDeperature({ start: '', end: '' })
      this.setArrive({ start: '', end: '' })
      this.setPrice({ min: '', max: '' })
      this.handleChangePage(1)
      this.search()
    },
    filterTransitDirect(x) {
      if (x === this.transit.direct) {
        this.setTransitDirect('')
        this.transit.direct = ''
      } else {
        this.setTransitDirect(x)
        this.transit.direct = x
      }
      this.handleChangePage(1)
      this.search()
      console.log(this.transit.direct)
    },
    filterTransit1(x) {
      if (x === this.transit.transit1) {
        this.setTransit1('')
        this.transit.transit1 = ''
      } else {
        this.setTransit1(x)
        this.transit.transit1 = x
      }
      this.handleChangePage(1)
      console.log(this.transit.transit1)
      this.search()
    },
    filterTransit2(x) {
      if (x === this.transit.transit2) {
        this.setTransit2('')
        this.transit.transit2 = ''
      } else {
        this.setTransit2(x)
        this.transit.transit2 = x
      }
      this.handleChangePage(1)
      console.log(this.transit.transit2)
      this.search()
    },
    filterFood(x) {
      if (x === this.transit.food) {
        this.setFood('')
        this.transit.food = ''
      } else {
        this.setFood(x)
        this.transit.food = x
      }
      this.handleChangePage(1)
      this.search()
    },
    filterWifi(x) {
      if (x === this.transit.wifi) {
        this.setWifi('')
        this.transit.wifi = ''
      } else {
        this.setWifi(x)
        this.transit.wifi = x
      }
      this.handleChangePage(1)
      this.search()
    },
    filterLuggage(x) {
      if (x === this.transit.luggage) {
        this.setLuggage('')
        this.transit.luggage = ''
      } else {
        this.setLuggage(x)
        this.transit.luggage = x
      }
      this.handleChangePage(1)
      this.search()
    },
    filterMascapai(x) {
      if (x === this.transit.airline) {
        this.setAirline('')
        this.transit.airline = ''
      } else {
        this.setAirline(x)
        this.transit.airline = x
      }
      this.handleChangePage(1)
      this.search()
    },
    filterDeperature(x, y) {
      if (x === this.departure.start && y === this.departure.end) {
        this.departure.start = ''
        this.departure.end = ''
        this.setDeperature(this.departure)
      } else {
        this.departure.start = x
        this.departure.end = y
        this.setDeperature(this.departure)
      }
      this.handleChangePage(1)
      this.search()
    },
    filterArrive(x, y) {
      if (x === this.arrive.start && y === this.arrive.end) {
        this.arrive.start = ''
        this.arrive.end = ''
        this.setArrive({ start: '', end: '' })
      } else {
        this.arrive.start = x
        this.arrive.end = y
        this.setArrive(this.arrive)
      }
      this.handleChangePage(1)
      this.search()
    },
    filterPrice() {
      const data = {
        min: this.price[0],
        max: this.price[1]
      }
      this.setPrice(data)
      this.handleChangePage(1)
      this.search()
    }
  }
}
</script>

<style scoped>
.mainWrapper {
  margin-left: 5%;
  margin-top: 30px;
  margin-bottom: 50px;
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.filterCard {
  background-color: white;
  border-radius: 15px;
  margin-top: 20px;
  padding: 25px;
}
.filterCard div {
  font-weight: bold;
}
.choice {
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
}
.pricetag {
  display: flex;
  justify-content: space-between;
  color: #2395ff;
}
</style>
