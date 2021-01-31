<template>
  <div>
    <div class="main">
      <div class="d-flex justify-content-start">
        <div class="d-flex align-items-center mb-3">
          <div><img src="../../../assets/icon-garuda.png" alt="" /></div>
          <div class="ml-4 text-dark-grey">{{ flight.mascapai }}</div>
          <div></div>
        </div>
      </div>
      <span class="mr-4 text-header"
        >{{ flight.fromCity }} ({{ flight.fromCountry }})</span
      >
      <span
        ><img src="../../../assets/icon-airplane.png" style="width:20px;"
      /></span>
      <span class="ml-3 text-header"
        >{{ flight.toCity }}({{ flight.toCountry }})</span
      >
      <div class="time mt-2">
        <span class="text-grey">{{ formatDate(flight.flightDate) }}</span>
        <span class="ml-4 text-grey">{{ flight.departureTime }}</span>
      </div>
      <div class="d-flex justify-content-start align-items-center mt-3 mb-2">
        <div>
          <img src="../../../assets/icon-markdone.png" />
        </div>
        <div>
          <p class="text-blue ml-2">Refundable</p>
        </div>
      </div>
      <div class="d-flex justify-content-start align-items-center">
        <div>
          <img src="../../../assets/icon-markdone.png" />
        </div>
        <div>
          <p class="text-blue ml-2">Can Reschedule</p>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between align-items-center">
        <div><h5>Total Payment</h5></div>
        <div>
          <h3 v-if="total" class="text-blue">Rp {{ total }}</h3>
          <h3 v-else class="text-blue">Rp {{ flight.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['flight', 'total'],
  methods: {
    formatDate(value) {
      const day = moment(value).format('dddd')
      const date = moment(value).format('ll')
      return `${day}, ${date}`
    }
  }
}
</script>

<style scoped>
.main {
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
}

p {
  margin-bottom: unset;
}

.text-dark-grey {
  color: #595959;
  font-size: 500;
}

.text-grey {
  color: #6b6b6b;
  font-size: 12px;
}

.text-header {
  color: #000000;
}

.text-blue {
  color: #2395ff;
  font-size: 500;
}
</style>
