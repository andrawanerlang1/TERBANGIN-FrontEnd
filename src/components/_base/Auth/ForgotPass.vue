<template>
  <div class="forgot animate__animated animate__fadeInRight">
    <div class="title">
      <img style="width:50px" src="../../../assets/img/logoflight.png" alt="" />
      <h4>Terbang.in</h4>
    </div>
    <div class="forms">
      <div class="title-form">
        <h1>Forgot Password</h1>
      </div>
      <b-form @submit.prevent="forgotPass">
        <b-form-input
          type="email"
          autocomplete="off"
          required
          placeholder="Email"
          class="input"
          v-model="form.email"
        ></b-form-input>
        <b-button type="submit" class="signin shadow" block>Send</b-button>
      </b-form>
      <center>
        <p style="color:#595959">
          You’ll get message soon on your email
        </p>
      </center>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'forgot',
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    ...mapActions(['forgot']),
    forgotPass() {
      this.forgot(this.form)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.forgot {
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 50px;
}
h4 {
  font-weight: 600;
  font-size: 24px;
  margin-left: 10px;
}
.title {
  display: flex;
  align-self: baseline;
  margin-bottom: 130px;
}
h1 {
  font-weight: 600;
  font-size: 46px;
  margin-bottom: 45px;
}
.input {
  border-radius: 0px;
  border: none;
  border-bottom: 2px solid #e4dbff;
  margin-bottom: 25px;
  padding: 0px;
}
.input:focus {
  box-shadow: 0 0 0 0rem rgba(64, 124, 214, 0.699);
  border-bottom: 2px solid #2395ff;
}

.signin {
  background-color: #2395ff;
  color: white;
  border: none;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 30px;
}

.shadow {
  -webkit-box-shadow: 0px 36px 39px -14px rgba(54, 79, 245, 1);
  -moz-box-shadow: 0px 36px 39px -14px rgba(54, 79, 245, 1);
  box-shadow: 0px 36px 39px -14px rgba(54, 79, 245, 1);
}
@media only screen and (max-width: 600px) {
  h1 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 45px;
  }
}
</style>
