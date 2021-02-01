<template>
  <div class="nav">
    <div class="logo" style="margin-right:10px" @click="toLanding">
      <img src="../assets/img/logoflight.png" style="margin-right:10px" />
      Terbang.in
    </div>
    <div class="searchFlight" style="margin-right:10px">
      <button>
        <img src="../assets/img/search.png" alt="" />
        Where you want to go?
      </button>
      <div class="findTicket" @click="getAllTicket" >
        Find Ticket
      </div>
      <div v-if="setUser.email">
        <div class="myBooking">
          <router-link v-if="setUser.role === 0" to="/mybooking" class="routerlink"  class-active="active"
            >My Booking</router-link
          >
          <router-link v-else to="/post-flight" class="routerlink">Post Flight</router-link>
        </div>
      </div>
    </div>
    <div class="profile">
      <div v-if="setUser.email">
        <router-link to="/chat">
          <img src="../assets/img/mail.png" alt=""
        /></router-link>
      </div>
      <div v-if="setUser.email">
        <router-link to="/notifications">
          <img src="../assets/img/bell.png" alt=""
        /></router-link>
      </div>
      <div v-if="setUser.email">
        <b-dropdown right text="Right align" variant="link" no-caret>
          <template #button-content>
            <img
            v-if="!setProfile.profileImage"
              src="../assets/img/profile.png"
              style="border-radius:100%; border: 2px solid #2395FF; width:45px"
              alt=""
            />
               <img
              v-if="setProfile.profileImage"
              :src="`${URL}/user/` + setProfile.profileImage"
              style="border-radius:100%; border: 2px solid #2395FF; width:45px"

            />
          </template>
          <b-dropdown-item @click="goProfile">My Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-dropdown>
      </div>
      <router-link class="routerlink"  v-if="!setUser.email" to=/login>
      login</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        fromCity: '',
        toCity: '',
        flightDate: '',
        clas: '',
        totalPassanger: ''
      },
      URL: process.env.VUE_APP_PORT
    }
  },
  created() { 
    this.getUserProfile(this.setUser.userId)
  },
  computed: {
    ...mapGetters(['setUser',"setProfile"])
  },
  methods: {
    ...mapActions(['search','logout']),
    ...mapMutations(['setParams','getUserProfile']),
    getAllTicket() {
      this.setParams(this.form)
      this.search('payload')
    },
    goProfile(){
    this.$router.push('/detail-profile')
    },
    show() {
      console.log(this.setUser)
    },
    toLanding(){
    this.$router.push('/')

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
.routerlink{
  color: black;
  text-decoration: none;
}
.routerlink:hover{
font-weight: bold;
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
.router-link-active{
    font-weight: bold;
  border-bottom: 5px solid #2395ff;
  padding-bottom: 5px;
}
.logo:hover{
  border: 2px #2395ff solid;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 8px 6px -6px black;

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
