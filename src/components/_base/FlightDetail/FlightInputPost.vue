<template>
  <div class="row mt-3 justify-content-center">
    <div class="col box mx-lg-2 mainWrapper" style="padding-bottom:50px">
      <div class="maskapai" style="font-weight:600">
        <div>
          Airlines
        </div>
        <div>
          <b-form-select
            v-model="form.mascapai"
            :options="options"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Departure Time
        </div>
        <b-form-input type="time" v-model="form.departureTime"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Arrival Time
        </div>
        <b-form-input type="time" v-model="form.arrivalTime"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Flight Date
        </div>
        <b-form-input type="date" v-model="form.flightDate"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Ticket Price (IDR) / pax
        </div>
        <b-form-input
          type="number"
          min="0"
          max="10000000"
          v-model="form.price"
        ></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Facilities
        </div>
        <div style="display:flex;justify-content:space-around; font-weight:500">
          <b-form-checkbox v-model="form.wifi" value="1">Wifi</b-form-checkbox>
          <b-form-checkbox v-model="form.food" value="1">Meal</b-form-checkbox>
          <b-form-checkbox v-model="form.luggage" value="1"
            >Luggage</b-form-checkbox
          >
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Flight Class
        </div>
        <div style="display:flex;justify-content:space-around; font-weight:500">
          <b-form-checkbox v-model="form.flightClass" value="economy"
            >Economy</b-form-checkbox
          >
          <b-form-checkbox v-model="form.flightClass" value="business"
            >Business</b-form-checkbox
          >
          <b-form-checkbox v-model="form.flightClass" value="firstclass"
            >First Class</b-form-checkbox
          >
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Capacity
        </div>
        <b-form-input
          type="number"
          min="10"
          max="5000"
          v-model="form.capacity"
        ></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Flight Route
        </div>
        <div class="routeCard">
          <div>
            From :
            <div style="display:flex">
              <b-form-select
                v-model="form.from"
                :options="place"
                required
              ></b-form-select>
            </div>
          </div>
          <div>
            To :
            <div style="display:flex">
              <b-form-select
                v-model="form.to"
                :options="place"
                required
              ></b-form-select>
            </div>
          </div>
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Terminal
        </div>
        <b-form-select
          v-model="form.terminal"
          :options="terminals"
          required
        ></b-form-select>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Transit
        </div>
        <b-form-select
          v-model="form.transit"
          :options="transits"
          required
        ></b-form-select>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Flight Code
        </div>
        <b-form-input v-model="form.code"></b-form-input>
      </div>
      <br />
      <b-button @click="addFlight">Post</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import alert from '../../../mixins/alert'

export default {
  name: 'FlightInput',
  mixins: [alert],
  data() {
    return {
      form: {
        mascapai: null,
        departureTime: null,
        arrivalTime: null,
        flightDate: null,
        price: '0',
        wifi: '0',
        food: '0',
        capacity: '0',
        luggage: '0',
        code: null,
        from: null,
        to: null,
        terminal: null,
        transit: null,
        flightClass: []
      },
      options: [
        { value: null, text: 'Please select airlines' },
        { value: 'Garuda Indonesia', text: 'Garuda Indonesia' },
        { value: 'Lion Air', text: 'Lion Air' },
        { value: 'Air Asia', text: 'Air Asia' }
      ],
      place: [
        { value: null, text: 'Please select the place' },
        { value: ['Medan', 'IDN'], text: 'Medan, Indonesia' },
        { value: ['Jakarta', 'IDN'], text: 'Jakarta, Indonesia' },
        { value: ['Tokyo', 'JPN'], text: 'Tokyo, Japan' },
        { value: ['K.Lumpur', 'MAS'], text: 'Kuala Lumpur, Malaysia' }
      ],
      terminals: [
        { value: null, text: 'Please select terminal' },
        { value: 'A', text: 'Terminal A' },
        { value: 'B', text: 'Terminal B' },
        { value: 'C', text: 'Terminal C' }
      ],
      transits: [
        { value: null, text: 'Please select terminal' },
        { value: '0', text: 'Direct Flight' },
        { value: '1', text: 'Transit Once' },
        { value: '2', text: 'Transit Twice' }
      ]
    }
  },
  methods: {
    ...mapActions(['postFlight']),
    addFlight() {
      const classs =
        this.form.flightClass[0] === 'economy' &&
        this.form.flightClass[1] === 'business' &&
        this.form.flightClass[2] === 'firstclass'
          ? '7'
          : this.form.flightClass[0] === 'economy' &&
            this.form.flightClass[1] === 'business'
          ? '4'
          : this.form.flightClass[0] === 'economy' &&
            this.form.flightClass[1] === 'firstclass'
          ? '5'
          : this.form.flightClass[0] === 'business' &&
            this.form.flightClass[1] === 'firstclass'
          ? '6'
          : this.form.flightClass[0] === 'economy'
          ? '1'
          : this.form.flightClass[0] === 'business'
          ? '2'
          : this.form.flightClass[0] === 'firstclass'
          ? '3'
          : 100
      const fromCity = this.form.from[0]
      const fromCountry = this.form.from[1]
      const toCity = this.form.to[0]
      const toCountry = this.form.to[1]
      const {
        mascapai,
        departureTime,
        arrivalTime,
        flightDate,
        price,
        wifi,
        food,
        capacity,
        luggage,
        code,
        terminal,
        transit
      } = this.form
      const data = {
        mascapai,
        mascapaiImage: '',
        departureTime,
        arrivedTime: arrivalTime,
        flightDate,
        price,
        food,
        wifi,
        luggage,
        capacity,
        clas: classs,
        fromCity,
        fromCountry,
        toCity,
        toCountry,
        tripType: '1',
        terminal,
        transitType: transit,
        code
      }
      this.postFlight(data)
        .then(result => {
          this.makeToast(`${result.data.msg}`, 'Success add flight', 'success')
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
      this.form = {
        mascapai: null,
        departureTime: null,
        arrivalTime: null,
        flightDate: null,
        price: '0',
        wifi: '0',
        food: '0',
        capacity: '0',
        luggage: '0',
        code: null,
        from: null,
        to: null,
        terminal: null,
        transit: null,
        flightClass: []
      }
    }
  }
}
</script>

<style scoped>
.mainWrapper {
  padding-top: 30px;
}
.formSeparator {
  font-weight: 600;
}
.separatorName {
  margin-top: 20px;
  margin-bottom: 10px;
}
.routeCard {
  border-radius: 15px;
  width: 70%;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.maxMesg p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.message {
  font-family: Lato;
  font-size: 14px;
  line-height: 18px;
  color: #6b6b6b;
}
.time {
  font-family: Lato;
  font-size: 12px;
  line-height: 14px;
  color: #6b6b6b;
}
.congratulations {
  font-family: Lato;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #2395ff;
}
.box {
  background: #f7fbff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 13px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}

button {
  background-color: #2395ff;
  border-radius: 10px;
  border: none;
  font-weight: bold;
}
</style>
