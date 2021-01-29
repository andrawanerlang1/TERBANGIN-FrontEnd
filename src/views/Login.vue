<template>
  <div class="Login poppins">
    <b-container fluid>
      <b-row>
        <b-col md="7" lg="7" xl="7" style="padding:0px">
          <div class="img animate__animated animate__fadeInLeft">
            <img src="../assets/img/AuthImg.png" alt="" class="responsive" />
          </div>
        </b-col>
        <b-col md="5" lg="5" xl="5" style="padding:0px">
          <Register v-if="typePage === 'register'" />
          <Login v-else-if="typePage === 'login'" />
          <Forgot v-else-if="typePage === 'forgot'" />
          <Reset v-else />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Register from '../components/_base/Auth/Register'
import Login from '../components/_base/Auth/Login'
import Forgot from '../components/_base/Auth/ForgotPass'
import Reset from '../components/_base/Auth/ResetPass'
import { mapGetters } from 'vuex'
export default {
  name: 'Auth',
  data() {
    return {}
  },
  created() {},
  components: {
    Register,
    Login,
    Forgot,
    Reset
  },
  computed: {
    ...mapGetters(['typePage'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.poppins {
  font-family: 'Poppins', sans-serif;
}
.img {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  img {
    display: none;
  }
}
</style>
