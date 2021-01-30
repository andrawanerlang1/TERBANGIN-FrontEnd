<template>
  <div class="booking-page">
    <Navbar type="flight" />
    <div class="main-booking">
      <CardProfile class="card-profile" />
      <div class="booking-content">
        <div class="booking-header mt-3 p-3">
          <p class="text-primary">M Y B O O K I N G</p>
          <div class="header-content">
            <h5 class="font-weight-bold">My Booking</h5>
            <p class="text-primary font-weight-bold">Order History</p>
          </div>
        </div>
        <div
          v-for="(item, index) in booking"
          :key="index"
          class="booking-history mt-4 p-3"
        >
          <p>{{ formatTime(item.flightDate) }}</p>
          <div class="route-way">
            <div class="from-title">
              <p class="font-weight-bold">{{ item.fromCountry }}</p>
            </div>
            <img src="../assets/img/logoGrey.png" alt="gray-small-plane" />
            <div class="from-title">
              <p class="font-weight-bold">{{ item.toCountry }}</p>
            </div>
          </div>
          <p class="text-secondary name-airplane">
            {{ item.mascapai }}, AB-221
          </p>
          <div class="navigation-button mt-4">
            <p class="font-weight-bold text-secondary mr-2">status</p>
            <div style="margin-top: -6px;">
              <p v-if="item.paymentStatus" class="payment-status bg-success">
                E-ticket Issued
              </p>
              <p v-else class="payment-status" style="width: 190px;">
                waiting for payment
              </p>
            </div>
            <p class="font-weight-bold text-primary" style="cursor: pointer;">
              <router-link :to="'/detail-booking/' + item.flightId">
                View Detail
              </router-link>
            </p>
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
import CardProfile from '../components/_base/Profile/CardProfile'
import Footer from '../components/Footer'
export default {
  name: 'MyBooking',
  components: {
    Navbar,
    CardProfile,
    Footer
  },
  computed: {
    ...mapGetters({ user: 'setUser', booking: 'getBooking' })
  },
  methods: {
    ...mapActions(['getBookingByUserId']),
    formatTime(value) {
      const day = moment(value).format('dddd')
      const date = moment(value).format('ll')
      const time = moment(value).format('LT')
      return `${day}, ${date} - ${time}`
    }
  },
  created() {
    this.getBookingByUserId(this.user.userId)
  }
}
</script>

<style scoped>
.main-booking {
  background-color: #f5f6fa;
  padding: 35px 30px;
  display: grid;
  grid-template-columns: 2fr 4fr;
}
.booking-header {
  width: 100%;
  height: 115px;
  background: #ffffff;
  border-radius: 15px;
}
.header-content {
  display: flex;
  justify-content: space-between;
}
.header-content p {
  font-size: 15px;
}
.booking-history {
  width: 100%;
  height: 240px;
  background: #ffffff;
  border-radius: 15px;
}
.from-title p {
  font-size: 20px;
}
.route-way img {
  margin-top: -16px;
  height: 20px;
}
.route-way {
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
}
.name-airplane {
  border-bottom: solid 1px rgb(187, 185, 185);
  padding-bottom: 10px;
}
.payment-status {
  background-color: #ff7f23;
  color: white;
  width: 145px;
  padding: 7px 10px;
  border-radius: 10px;
}
.navigation-button {
  display: grid;
  grid-template-columns: 1fr 8fr 2fr;
}
@media screen and (max-width: 992px) {
  .navigation-button {
    grid-template-columns: 1fr 4.5fr 2fr;
  }
}
@media screen and (max-width: 768px) {
  .main-booking {
    grid-template-columns: 1fr;
  }
  .card-profile {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .navigation-button {
    grid-template-columns: 4fr 2fr;
  }
  .navigation-button p {
    display: none;
  }
}
@media screen and (max-width: 400px) {
  .main-booking {
    background-color: #fff;
  }
  .navigation-button {
    grid-template-columns: 4fr 2fr;
  }
  .navigation-button p {
    display: none;
  }
  .booking-history {
    background-size: contain;
    width: 100%;
  }
  .route-way {
    margin-top: -12px;
  }
  .name-airplane {
    margin-top: -10px;
  }
}
</style>
