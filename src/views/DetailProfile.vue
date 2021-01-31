<template>
  <div class="detail-profile">
    <Navbar type="flight" />
    <div class="container">
      <b-row>
        <b-col><CardProfile /></b-col>
        <b-col>
          <div class="profile mt-3 p-4">
            <p class="sub">PROFILE</p>
            <h3>Profile</h3>
            <form @submit.prevent="updateProfile">
              <div class="row mt-4">
                <div class="col-sm-6">
                  <p>Contact</p>
                  <label class="text-muted">Email</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.email"
                  />
                  <label class="text-muted">Phone Number</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.phoneNumber"
                  />
                </div>
                <div class="col-sm-6">
                  <p>Biodata</p>
                  <label class="text-muted">Username</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.fullName"
                  />
                  <label class="text-muted">City</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.city"
                  />
                  <br />
                  <br />
                  <label class="text-muted">Address</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.nationality"
                  />
                  <label class="text-muted">Post Code</label>
                  <input
                    type="text"
                    class="form-control mb-4"
                    v-model="profile.postCode"
                  />
                  <button type="submit" class="btn btn-save">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Navbar from '../components/Navbar'
import CardProfile from '../components/_base/Profile/CardProfile'
import Footer from '../components/Footer'
export default {
  name: 'Profile',
  components: {
    Navbar,
    CardProfile,
    Footer
  },
  data() {
    return {}
  },
  created() {
    this.getUserProfile(this.user.userId)
  },
  methods: {
    ...mapActions([
      'getUserProfile',
      'logout',
      'patchUserProfile',
      'patchLocation',
      'patchProfilePict',
      'deleteProfilePict'
    ]),
    ...mapMutations(['patchUser']),
    updateProfile() {
      // console.log('connected to this function')
      // console.log(this.profile)
      // this.form.fullName = this.profile.fullName
      // this.form.phoneNumber = this.profile.phoneNumber
      // this.form.city = this.profile.city
      // this.form.nationality = this.profile.nationality
      // this.form.postCode = this.profile.postCode
      // this.patchUser(this.form)
      const setData = { id: this.user.userId, data: this.profile }
      this.patchUserProfile(setData)
        .then(result => {
          this.$toasted.success(result)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile'
    })
  }
}
</script>

<style scoped>
.detail-profile {
  background-color: #f5f6fa;
}
.profile {
  background-color: #fff;
  border-radius: 15px;
  width: 100vh;
  height: 96%;
  margin-bottom: 15px;
}
.sub {
  color: #2395ff;
  letter-spacing: 0.3em;
}
.sub,
h3,
p {
  font-weight: bolder;
}
input[type='text'],
input[type='password'],
select {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  /* -webkit-box-shadow: none; */
  box-shadow: none;
  border-radius: 0;
}
input[type='text']:focus,
input[type='password']:focus,
select:focus {
  /* -webkit-box-shadow: none; */
  box-shadow: none;
  border-bottom: 2px soli#2395FF;
}
.btn-save {
  color: #fff;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 10px 35px;
  float: right;
}
@media (max-width: 768px) {
  .profile {
    width: 1000px;
    height: 100%;
    margin-bottom: 15px;
  }
}
@media (max-width: 576px) {
  .detail-profile {
    background-color: #fff;
  }
  .profile {
    width: 450px;
    height: 100%;
    margin-bottom: 15px;
  }
}
</style>
