<template>
  <div class="booking-detail">
    <Navbar type="flight" />
    <div class="row justify-content-center">
      <div class="booking-card p-3">
        <div class="container mt-5">
          <b-row>
            <b-col cols="10">
              <h4 class="font-weight-bold mb-4 ml-5">
                Booking Pass
              </h4></b-col
            >
          </b-row>
          <div class="row justify-content-center mb-4">
            <div class="booking-left col-sm-6">
              <b-row>
                <b-col md="12">
                  <img
                    :src="
                      flight.mascapai === 'Garuda Indonesia'
                        ? require('../assets/stockAirline/logo-garuda.png')
                        : flight.mascapai === 'Lion Air'
                        ? require('../assets/stockAirline/logo-lion1.png')
                        : flight.mascapai === 'Air Asia'
                        ? require('../assets/stockAirline/logo-airasia.png')
                        : '../assets/stockAirline/logo-garuda.png'
                    "
                    alt="logo garuda"
                    class="maskapai-img"
                  />
                </b-col>
                <b-col class="pt-4" md="12">
                  <b class="departure font-weight-bold">
                    {{ flight.fromCity }}
                  </b>
                  <img
                    src="../assets/img/logoGrey.png"
                    alt="gray-small-plane"
                    class="logo-grey"
                  />
                  <b class="departure font-weight-bold ml-2">
                    {{ flight.toCity }}
                  </b>
                </b-col>
              </b-row>
              <br />

              <b-row>
                <b-col>
                  <b class="small text-muted">Code</b>
                  <p class="small">{{ flight.code }}</p>
                </b-col>
                <b-col>
                  <b class="small text-muted">Class</b>
                  <p class="small">{{ flightClass }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b class="small text-muted">Terminal</b>
                  <p class="small">{{ flight.terminal }}</p>
                </b-col>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <b-col>
                  <b class="small text-muted">Gate</b>
                  <p class="small">221</p>
                </b-col>
              </b-row>
              <p class="small text-muted">Departure</p>
              <p class="small">
                {{ formatDate(flight.flightDate) }}
                - {{ flight.departureTime }}
              </p>
            </div>
            <div class="booking-right col-sm-4 text-center">
              <vue-qrcode value="qrcodeValue" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VueQrcode from 'vue-qrcode'

export default {
  name: 'BookingDetail',
  components: {
    Navbar,
    VueQrcode,
    Footer
  },
  data() {
    return { qrcodeValue: `www.google.com` }
  },
  computed: {
    ...mapGetters({
      flight: 'getFlightDetail'
    }),
    flightClass() {
      if (this.flight.clas === 2) {
        return 'First Class'
      } else if (this.flight.clas === 1) {
        return 'Business'
      } else {
        return 'Economy'
      }
    }
  },
  methods: {
    ...mapActions(['getFlightById']),
    formatDate(value) {
      const day = moment(value).format('dddd')
      const date = moment(value).format('ll')
      return `${day}, ${date}`
    }
  },
  created() {
    const bookingId = this.$route.params.id
    this.getFlightById(bookingId)
  }
}
</script>

<style>
.booking-left img.maskapai-img {
  max-width: 180px;
  max-height: 100px;
}

.booking-left img.logo-grey {
  width: 20px;
  height: 20px;
}

.booking-detail {
  background-color: #2395ff;
  overflow: hidden;
}
.booking-card {
  background-color: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  height: 100%;
  width: 60%;
  margin: 20px;
}
.booking-left {
  width: 200px;
  height: 100%;
  border: 0.5px solid #e5e5e5;
  border-right: 2px dashed #e5e5e5;
  border-radius: 10px;
  padding: 20px;
}
.booking-right {
  width: 100%;
  height: 100%;
  border: 0.5px solid#E5E5E5;
  border-left: none;
  border-radius: 10px;
}
.booking-right img.qr-code {
  margin: 10% 0;
  height: 255px;
  width: 255px;
}
.departure {
  font-size: 27px;
}
@media (min-width: 581px) {
  .booking-right img.qr-code {
    width: 100%;
    height: 300px;
  }
}
@media (max-width: 576px) {
  .booking-left img.maskapai-img {
    max-width: 180px;
    max-height: 50px;
    margin-top: 40px;
  }
  .booking-right img.qr-code {
    margin: 10% auto;
    width: 100%;
  }
  .booking-left {
    border: 2px dashed #e5e5e5;
  }
  .booking-right {
    border: 2px dashed #e5e5e5;
  }
}
</style>
