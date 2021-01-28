<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container class="pt-5">
        <b-row>
          <b-col col lg="8" md="8" sm="12" cols="12" style="width: 100%;">
            <h4 class="text-white mb-4">Contact Person Details</h4>
            <ContactPersonDetail />
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
            <PassangerDetailTop />
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
              <button class="btn-payment my-5">Procees to Payment</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactPersonDetail from '../components/_base/FlightDetail/ContactPersonDetail'
import FlightDetailCard from '../components/_base/FlightDetail/FlightDetail'
import PassangerDetailTop from '../components/_base/FlightDetail/PassengerDetailTop'
import PassangerDetailBot from '../components/_base/FlightDetail/PassangerDetailBot'

export default {
  name: 'FlightDetail',
  components: {
    Navbar,
    Footer,
    ContactPersonDetail,
    FlightDetailCard,
    PassangerDetailTop,
    PassangerDetailBot
  }
}
</script>

<style scoped>
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
