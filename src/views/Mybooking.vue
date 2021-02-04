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
        <div class="booking-list">
          <div
            v-for="(item, index) in booking"
            :key="index"
            class="booking-history mt-3 p-3"
          >
            <p>{{ formatTime(item.flightDate) }}</p>
            <div class="route-way">
              <div class="from-title">
                <p class="font-weight-bold">{{ item.fromCity }}</p>
              </div>
              <img
                src="../assets/img/logoGrey.png"
                alt="gray-small-plane"
                class="mx-3"
              />
              <div class="from-title">
                <p class="font-weight-bold">{{ item.toCity }}</p>
              </div>
            </div>
            <p class="text-secondary name-airplane">
              {{ item.mascapai }}, {{ item.code }}
            </p>

            <div v-if="index === detailIndex" class="booking-detail">
              <div class="d-flex justify-content-between">
                <div class="booking-code">
                  <p>Booking Code : {{ item.code }}</p>
                </div>
                <div class="passenger">
                  <p>Passenger : {{ item.totalPassenger }}</p>
                </div>
                <div class="payment">
                  <p>Payment : Rp {{ item.totalPayment }}</p>
                </div>

                <div>
                  <router-link
                    v-if="item.paymentStatus"
                    :to="'/detail-booking/' + item.flightId"
                  >
                    <button
                      class="btn-detail"
                      @click="bookingId(item.bookingId)"
                    >
                      Boarding pass
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="navigation-button mt-2">
              <p class="font-weight-bold text-secondary mr-2">status</p>
              <div style="margin-top: -6px;">
                <p v-if="item.paymentStatus" class="payment-status bg-success">
                  E-ticket Issued
                </p>
                <p v-else class="payment-status" style="width: 190px;">
                  waiting for payment
                </p>
              </div>
              <p
                @click="showDetail(index)"
                class="font-weight-bold text-primary"
                style="cursor: pointer;"
              >
                <!-- <router-link :to="'/detail-booking/' + item.flightId"> -->
                View Detail
                <!-- </router-link> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="show">show</button>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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
  data() {
    return {
      detailIndex: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'setUser', booking: 'getBooking' })
  },
  methods: {
    ...mapActions(['getBookingByUserId']),
    ...mapMutations(['setBookingId']),
    bookingId(input) {
      this.setBookingId(input)
    },
    show() {
      console.log(this.booking)
    },
    showDetail(index) {
      this.detailIndex = index
      console.log(this.detailIndex)
    },
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
.booking-list {
  margin-top: 10px;
  height: 800px;
  overflow: auto;
}

.booking-detail p {
  margin-bottom: unset;
}

.booking-detail {
  background: rgb(255, 255, 255);
}

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
.btn-detail {
  background: blue;
  color: #fff;
  outline: unset;
  border: unset;
  border-radius: 5px;
  transition-duration: 0.6s;
}
.btn-detail:hover {
  background: rgb(0, 0, 194);
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

  .navigation-button,
  .mt-4 {
    margin-top: unset;
  }

  p {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .btn-detail {
    font-size: 10px;
  }

  .btn-detail .d-flex,
  .justify-content-between {
    flex-direction: column;
  }

  .booking-detail p {
    font-size: 9px;
    flex-direction: column;
  }

  /* .booking-detai .booking-code,
  .passenger,
  .payment {
    width: 33%;
  } */

  .booking-history {
    height: 240px;
  }

  .btn-detail {
    font-size: 9px;
  }
  /* .navigation-button p {
    display: none;
  } */
}
@media screen and (max-width: 400px) {
  .main-booking {
    background-color: #fff;
  }
  .navigation-button {
    grid-template-columns: 4fr 2fr;
  }
  /* .navigation-button p {
    display: none;
  } */
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
