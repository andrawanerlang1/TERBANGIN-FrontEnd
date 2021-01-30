<template>
  <div class="nav">
    <div class="logo" style="margin-right:10px">
      <img src="../assets/img/logoflight.png" style="margin-right:10px" />
      Terbang.in
    </div>
    <div class="searchFlight" style="margin-right:10px">
      <button>
        <img src="../assets/img/search.png" alt="" />
        Where you want to go?
      </button>
      <div class="findTicket">
        Find Ticket
      </div>
      <div v-if="user.email">
        <div class="myBooking">
          <router-link v-if="user.role === 0" to="/mybooking"
            >My Booking</router-link
          >
          <router-link v-else to="">Post Flight</router-link>
        </div>
      </div>
    </div>
    <div class="profile">
      <div v-if="user.email">
        <router-link to="/chat">
          <img src="../assets/img/mail.png" alt=""
        /></router-link>
      </div>
      <div v-if="user.email">
        <router-link to="/notifications">
          <img src="../assets/img/bell.png" alt=""
        /></router-link>
      </div>
      <div v-if="user.email">
        <b-dropdown right text="Right align" variant="link" no-caret>
          <template #button-content>
            <img
              src="../assets/img/profile.png"
              style="border-radius:100%; border: 2px solid #2395FF; width:45px"
              alt=""
            />
          </template>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-dropdown>
      </div>
      <router-link  v-if="!user.email" to=/login>
      login</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    ...mapActions(['logout']),
    show() {
      console.log(this.user)
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 45px;
  text-align: center;
  background: #fff;
}
.logo {
  font-weight: bold;
  width: 170px;
  margin-left: 20px;
}
.searchFlight {
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
}
.findTicket:hover,
.myBooking:hover {
  font-weight: bold;
  border-bottom: 5px solid #2395ff;
  padding-bottom: 5px;
}
.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-right: 20px;
}
.searchFlight button {
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  background-color: #f5f5f5;
  color: #6b6b6b;
  border: 0px;
}
</style>
