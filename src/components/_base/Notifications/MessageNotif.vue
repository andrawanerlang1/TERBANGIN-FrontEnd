<template>
  <div class="mainWrapper">
    <div
      class="row mt-3 justify-content-center"
      v-for="(item, index) in notif"
      :key="index"
    >
      <div class="col box mx-lg-2">
        <div class="row mt-3 ">
          <div class="col mx-1 congratulations">{{ item.notifTitle }}</div>
        </div>
        <div class="row mt-3">
          <div class="col mx-1 message maxMesg">
            <p>
              {{ item.notifMessage }}
            </p>
          </div>
        </div>
        <div class="row mt-lg-4 mb-3">
          <div class="col mx-1 time">{{ item.createdAt }}</div>
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
  },
  methods: {
    ...mapActions(['getNotifByUserId'])
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      notif: 'getterNotif'
    })
  }
}
</script>

<style scoped>
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
