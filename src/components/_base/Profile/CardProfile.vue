<template>
  <div class="card-main mt-3">
    <div class="sub-card m-4">
      <form>
        <div class="text-center">
          <div class="user-profile">
            <img
              src="../../../assets/img/profile.png"
              alt="profile"
              class="rounded-circle mt-4"
            />
          </div>
          <label class="custom-file-upload">
            <input type="file" />
            <b>Select Photo</b>
          </label>
          <h5>{{ profile.fullName }}</h5>
          <p class="small text-muted">{{ profile.city }}</p>
        </div>
      </form>
      <b-row>
        <b-col><b>Cards</b></b-col>
        <b-col><p class="text-info text-right">+ Add</p></b-col>
      </b-row>
      <div class="mini-card">
        <b>4441 1235 5512 5551</b>
        <b-row>
          <b-col><p>X Card</p></b-col>
          <b-col><p class="text-right">$ 1,440.2</p></b-col>
        </b-row>
      </div>

      <div class="menu">
        <ul>
          <li class="text-primary">
            <router-link to="/detail-profile">
              <b-icon-person-circle class="mr-3"></b-icon-person-circle> Profile
            </router-link>
          </li>
          <li>
            <b-icon-star-fill class="text-secondary mr-3"></b-icon-star-fill> My
            Review
          </li>
          <li>
            <b-icon-gear-fill class="text-secondary mr-3"></b-icon-gear-fill>
            <b-button v-b-modal.modal-1 class="modal-1"
              >Change Password</b-button
            >
          </li>
          <li class="text-danger">
            <b-icon-box-arrow-right class="mr-3"></b-icon-box-arrow-right>Logout
          </li>
        </ul>
      </div>
    </div>
    <b-modal id="modal-1" v-bind:hide-footer="true" title="Change Password">
      <p class="my-4">Inpur Your Email Password</p>
      {{ form }}
      <input
        type="text"
        class="form-control mb-4"
        v-model="form.changepassword"
      />
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Profile',
  data() {
    return {
      form: {
        changepassword: ''
      }
    }
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
button.modal-1 {
  border: none;
  background: white;
  padding-left: 0px;
  color: black;
  font-weight: bold;
}
button.modal-1:hover {
  outline: none;
  border: none;
}
button.modal-1:focus {
  outline: none;
  border: none;
}
input[type='file'] {
  display: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2395ff;
  margin-bottom: 15px;
}
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 95%;
  margin: auto;
}
.user-profile img {
  width: 100px;
  height: 90px;
  border: 3px solid #2395ff;
  padding: 5px;
  margin-bottom: 15px;
}
.btn-photo {
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
h5 {
  font-weight: bolder;
}
p {
  font-size: 12px;
}
.mini-card {
  background-color: #2395ff;
  color: #fff;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
  padding: 15px;
}
.mini-card b {
  letter-spacing: 2.3px;
}
.mini-card p {
  color: #aefaff;
}
.menu ul li {
  margin-top: 20px;
  list-style: none;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 1008px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
@media (max-width: 576px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
</style>
