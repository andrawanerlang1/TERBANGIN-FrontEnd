<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container class="pt-5">
        <b-row>
          <b-col col lg="8" md="8" sm="12" cols="12" style="width: 100%;">
            <h4 class="text-white mb-4">Contact Person Details</h4>
            <ContactPersonDetail :formBooking="formBooking" />
          </b-col>
          <b-col col lg="4" md="4" sm="12" cols="12" style="width: 100%;">
            <h4 class="text-white mb-4">Flight Detail</h4>
            <FlightDetailCard />
          </b-col>
        </b-row>
        <b-row>
          <b-col col lg="8" md="8" sm="12" cols="12" style="width: 100%;">
            <h4 class=" mb-4 mt-4  text-black">
              Passanger Details
            </h4>
            <PassangerDetailTop
              :formPassenger="formPassenger"
              :passenger="passenger"
              :flight="flight"
              :params="params"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col col lg="8" md="8" sm="12" cols="12" style=" width: 100%;">
            <h4 class=" mb-4 mt-5  text-black">
              Passanger Details
            </h4>
            <PassangerDetailBot />
          </b-col>
        </b-row>
        <b-row>
          <b-col col lg="8" md="8" sm="12" cols="12" style=" width: 100%;">
            <div class="text-center">
              <button @click="addBooking" class="btn-payment my-5">
                Procees to Payment
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <button @click="show">show</button>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import alert from '../mixins/alert'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactPersonDetail from '../components/_base/FlightDetail/ContactPersonDetail'
import FlightDetailCard from '../components/_base/FlightDetail/FlightDetail'
import PassangerDetailTop from '../components/_base/FlightDetail/PassengerDetailTop'
import PassangerDetailBot from '../components/_base/FlightDetail/PassangerDetailBot'

export default {
  name: 'FlightDetail',
  mixins: [alert],
  components: {
    Navbar,
    Footer,
    ContactPersonDetail,
    FlightDetailCard,
    PassangerDetailTop,
    PassangerDetailBot
  },
  data() {
    return {
      formBooking: {
        contactFullName: '',
        contactEmail: '',
        phoneCode: '+62',
        phoneNumber: ''
      },
      formPassenger: [],
      passenger: {
        title: 'Mr.',
        fullName: '',
        nationality: 'Indonesia'
      },
      userId: '',
      // data flight by flight id
      flight: {
        flightId: 3,
        price: 500000
      }
    }
  },
  computed: {
    ...mapGetters({
      setUser: 'setUser',
      params: 'getParams'
    }),
    total() {
      return this.formPassenger.length * this.flight.price
    }
  },
  created() {
    this.userId = this.setUser.userId
  },
  methods: {
    ...mapActions(['postBooking', 'patchFlightCapacity']),
    show() {
      console.log(this.params)
    },
    addBooking() {
      const dataBooking = {
        userId: this.userId,
        flightId: this.flight.flightId,
        totalPassenger: this.formPassenger.length,
        totalPayment: this.total,
        contactFullName: this.formBooking.contactFullName,
        contactEmail: this.formBooking.contactEmail,
        contactNumber: this.formBooking.phoneCode + this.formBooking.phoneNumber
      }

      const setData = [dataBooking, ...this.formPassenger]

      const patchFlight = {
        flightId: this.flight.flightId,
        totalPassenger: this.formPassenger.length
      }

      this.patchFlightCapacity(patchFlight)
        .then(result => {
          console.log(result)
          this.postBooking(setData)
            .then(result => {
              this.successAlert(result.data.msg)
            })
            .catch(error => {
              this.errorAlert(error.data.msg)
            })
        })
        .catch(err => {
          this.errorAlert(err.data.msg)
        })
    }
  }
}
</script>

<style scoped>
button {
  outline: unset;
}

.main {
  background-image: url('../assets/bg-header.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  background-color: #f5f6fa;
}

.text-white {
  color: #fff;
}

.text-black {
  color: #000;
}

.btn-payment {
  background-color: #2395ff;
  color: #fff;
  font-size: 600;
  padding: 15px 100px;
  border-radius: 10px;
  transition-duration: 0.7s;
  border: unset;
  font-weight: 600;
}

.btn-payment:hover {
  background-color: #037ff2;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
