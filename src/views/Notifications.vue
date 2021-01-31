<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <img
        class="img-fluid"
        src="../../src/assets/header-notif.png"
        style="position:absolute;"
      />
    </div>
    <div class="row justify-content-center">
      <div class="col-10 boxMessage col-lg-8  mt-5">
        <div class="container">
          <div class="row">
            <div class="col mx-lg-4">
              <div class=" row mt-4 mt-lg-5">
                <div class=" pl-0 pl-lg col Notifications ">NOTIFICATIONS</div>
              </div>
              <div
                class=" row mt-1 mb-5 mt-lg-3 mb-lg-4 justify-content-between"
              >
                <div class="pl-0 pl-lg col Notifications2 ">
                  Notifications
                </div>
                <div class="col text-right clearNotif  mt-2 ">
                  <button class="notifButton" @click="deleteNotif">
                    Clear
                  </button>
                </div>
              </div>
              <Notif />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Notif from '../components/_base/Notifications/MessageNotif'
export default {
  components: {
    Navbar,
    Footer,
    Notif
  },
  created() {},
  methods: {
    ...mapActions(['deleteNotifByUserId', 'getNotifByUserId']),

    deleteNotif() {
      this.deleteNotifByUserId(this.user.userId)
        .then(result => {
          this.$toasted.success(result)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
      this.getNotifByUserId(this.user.userId)
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      notif: 'getterNotif'
    })
  }
}
</script>

<style>
div .row img {
  width: 100%;
  height: 55%;
}
.notifButton {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #2395ff;
  background-color: white;
  border: 0px;
}
.notifButton:hover {
  background-color: #2395ff;
  color: white;
  border-radius: 5px;
  box-shadow: 0 8px 6px -6px black;
}
.Notifications2 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.Notifications {
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: #2395ff;
}
.boxMessage {
  width: 800px;
  height: 775px;
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
}
@media screen and (max-width: 550px) {
  .Notifications2 {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
  .Notifications {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.3em;
    color: #2395ff;
  }
  .clearNotif {
    font-weight: 600;
    font-size: 14px;
    text-align: right;
    color: #2395ff;
  }
}
</style>
