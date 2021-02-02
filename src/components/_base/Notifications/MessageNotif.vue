<template>
  <div class="containerNotif">
    <div class="mainWrapper" v-if="user.role === 0">
      <div
        style="width:80%"
        class="row mt-3 justify-content-center"
        v-for="(item, index) in notif"
        :key="index"
      >
        <div class="col box mx-lg-2">
          <div class="row mt-3 ">
            <div class="col mx-1 congratulations">
              {{ item.notifTitle }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col mx-1 message maxMesg">
              <p>
                {{ item.notifMessage.slice(0, 101) }}
              </p>
              <p>
                {{ item.notifMessage.slice(102, 125) }}

                <a :href="`${item.notifMessage.slice(126)}`">Payment Link</a>
              </p>
            </div>
          </div>
          <div class="row mt-lg-4 mb-3">
            <div class="col mx-1 time">{{ item.createdAt.slice(0, 10) }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="adminWrapper" v-if="user.role === 1">
      <div
        style="width:80%"
        class="row mt-3 justify-content-center"
        v-for="(item, index) in allBooking"
        :key="index"
      >
        <div class="col box mx-lg-2">
          <div class="row mt-3 ">
            <div class="col mx-1 congratulations">
              Booking Code : {{ item.code }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col mx-1 message maxMesg">
              <p>Contact Name : {{ item.contactFullname }}</p>
              <p>Airlines : {{ item.mascapai }}</p>
              <p>Payment Totals : {{ item.totalPayment }}</p>
            </div>
          </div>
          <div class="row mt-lg-4 mb-3">
            <div class="col mx-1 time">{{ item.createdAt.slice(0, 10) }}</div>
            <div class="col mx-1 time">
              <button
                class="buttonApprove"
                @click="approveBooking(item.bookingId, item.userId)"
              >
                Approve Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NotifComponent',
  data() {
    return {}
  },
  created() {
    this.getNotifByUserId(this.user.userId)
    this.getAllBooking()
  },
  methods: {
    ...mapActions(['getNotifByUserId', 'getAllBooking', 'patchBookingStatus']),
    approveBooking(idbook, iduser) {
      const setData = { id: idbook, userId: iduser }
      this.patchBookingStatus(setData)
        .then(result => {
          this.$toasted.success(result)
          this.getAllBooking()
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      notif: 'getterNotif',
      allBooking: 'getAllBooking'
    })
  }
}
</script>

<style scoped>
.containerNotif {
  height: 600px;
  overflow: auto;
}
.adminWrapper,
.mainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.maxMesg p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.message {
  font-family: Lato;
  font-size: 14px;
  line-height: 18px;
  color: #6b6b6b;
}
.time {
  font-family: Lato;
  font-size: 12px;
  line-height: 14px;
  color: #6b6b6b;
}
.buttonApprove {
  background-color: rgba(19, 168, 236, 0.973);
  border: 0px;
  color: white;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.congratulations {
  font-family: Lato;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #2395ff;
}
.box {
  background: #f7fbff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 13px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
@media screen and (max-width: 550px) {
  .box {
    width: 269px;
    height: 150px;
    background: #f7fbff;
    border: 1px solid #2395ff;
    box-sizing: border-box;
    border-radius: 13px;
  }
  .message {
    font-family: Lato;
    font-size: 12px;
    line-height: 18px;
    color: #6b6b6b;
  }
}
</style>
