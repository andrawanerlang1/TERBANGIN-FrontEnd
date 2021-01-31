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
                <b-col>
                  <img
                    :src="
                      'http://localhost:3000/mascapai/' + flight.mascapaiImage
                    "
                    alt="logo garuda"
                    class="maskapai-img"
                  />
                </b-col>
                <b-col class="pt-4">
                  <b class="departure font-weight-bold">
                    {{ flight.fromCountry }}
                  </b>
                  <img
                    src="../assets/img/logoGrey.png"
                    alt="gray-small-plane"
                    class="logo-grey"
                  />
                  <b class="departure font-weight-bold ml-2">
                    {{ flight.toCountry }}
                  </b>
                </b-col>
              </b-row>
              <br />

              <b-row>
                <b-col>
                  <b class="small text-muted">Code</b>
                  <p class="small">AB-221</p>
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
              <img
                class="qr-code"
                src="../assets/img/qrcode.png"
                alt="qr code"
              />
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

export default {
  name: 'BookingDetail',
  components: {
    Navbar,
    Footer
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
  width: 140px;
  height: 100px;
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
  }
}
@media (max-width: 576px) {
  .booking-right img.qr-code {
    margin: 10% auto;
  }
  .booking-left {
    border: 2px dashed #e5e5e5;
  }
  .booking-right {
    border: 2px dashed #e5e5e5;
  }
}
</style>
