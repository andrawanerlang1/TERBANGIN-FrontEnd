<template>
  <div class="login animate__animated animate__fadeInRight">
    <div class="title">
      <img style="width:50px" src="../../../assets/img/logoflight.png" alt="" />
      <h4>Terbang.in</h4>
    </div>
    <div class="forms">
      <div class="title-form">
        <h1>Login</h1>
      </div>
      <b-form @submit.prevent="signin">
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
        <b-button type="submit" class="signin shadow" block>Sign In</b-button>
      </b-form>
      <center>
        <p style="color:#595959">
          Did you forgot your password?
        </p>
        <div
          @click="setPage('forgot')"
          style="color:#2395FF;text-decoration:underline;cursor:pointer"
        >
          Tap here for reset
        </div>
      </center>
      <br />
      <hr />
      <p style="color:#595959;text-align:center;margin-bottom:35px">
        or sign in with
      </p>
      <div class="button-alternative">
        <div class="btn-alter">
          <img
            style="width:25px;height:25px"
            src="../../../assets/img/google.png"
            alt=""
          />
        </div>
        <div class="btn-alter">
          <img
            style="width:25px;height:25px"
            src="../../../assets/img/fb.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import alert from '../../../mixins/alert'
export default {
  name: 'Login',
  mixins: [alert],
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  created() {},
  computed: {
    ...mapGetters(['setUser'])
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setPage']),
    signin() {
      this.login(this.form)
        .then(result => {
          this.makeToast(
            `${result.data.msg}`,
            `Congratulations, ${this.form.email}`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/landing')
          }, 2500)
          console.log(result)
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    }
  }
}
</script>

<style scoped>
.button-alternative {
  display: flex;
  justify-content: center;
}
.btn-alter {
  padding: 15px 40px 15px 40px;
  border: 1px solid #2395ff;
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;
}
.btn-alter img {
  width: 25px;
}
.login {
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
