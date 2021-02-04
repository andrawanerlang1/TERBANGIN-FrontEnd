<template>
  <div class="register animate__animated animate__fadeInRight">
    <div class="title">
      <img style="width:50px" src="../../../assets/img/logoflight.png" alt="" />
      <h4>Terbang.in</h4>
    </div>
    <div class="forms">
      <div class="title-form">
        <h1>Register</h1>
      </div>
      <b-form @submit.prevent="onRegister">
        <b-form-input
          type="text"
          autocomplete="off"
          required
          placeholder="Full Name"
          class="input"
          v-model="form.fullName"
        ></b-form-input>
        <b-form-input
          type="email"
          autocomplete="off"
          required
          placeholder="Email"
          class="input"
          v-model="form.email"
        ></b-form-input>
        <b-form-input
          type="password"
          autocomplete="off"
          required
          placeholder="Password"
          class="input"
          v-model="form.password"
        ></b-form-input>
        <b-button type="submit" class="signup shadow" block>Sign Up</b-button>
        <b-form-checkbox
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          required
        >
          Accept terms and condition
        </b-form-checkbox>
      </b-form>
      <br />
      <hr />
      <p style="color:#A1A1A1;text-align:center;margin-bottom:35px">
        Already have an account?
      </p>
      <b-button type="submit" class="signin" block @click.prevent="toSignIn"
        >Sign In</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import alert from '../../../mixins/alert'
export default {
  name: 'Register',
  mixins: [alert],
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        password: ''
      }
    }
  },
  created() {},
  computed: {
    ...mapGetters(['typePage'])
  },
  methods: {
    ...mapActions(['register']),
    ...mapMutations(['setPage']),
    onRegister() {
      this.register(this.form)
        .then(result => {
          this.makeToast(
            'Congratulations',
            `${result.data.data.fullName} Register successfully`,
            'success'
          )
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    },
    toSignIn() {
      this.setPage('login')
    }
  }
}
</script>

<style scoped>
.register {
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

.signup {
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

.signin {
  background-color: white;
  color: #2395ff;
  border: 1px solid #2395ff;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
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
