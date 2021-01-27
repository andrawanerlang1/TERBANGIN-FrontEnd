<template>
  <div class="Login poppins">
    <b-container fluid>
      <b-row>
        <b-col md="7" lg="7" xl="7" style="padding:0px">
          <div class="img">
            <img src="../assets/img/AuthImg.png" alt="" class="responsive" />
          </div>
        </b-col>
        <b-col md="5" lg="5" xl="5" style="padding:0px">
          <Register />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.poppins {
  font-family: 'Poppins', sans-serif;
}
img {
  width: 100%;
}
</style>

<script>
import Register from '../components/_base/Auth/Register'
export default {
  name: 'Login',
  components: {
    Register
  }
}
</script>
