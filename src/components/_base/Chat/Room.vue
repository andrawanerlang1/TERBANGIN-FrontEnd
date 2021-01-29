<template>
  <div>
    {{ room + 'room' }} {{ oldRoom + 'oldroom' }} {{ roomId + 'roomId' }} tes
    <div class="room-container">
      <div class="header">
        <h4>Chat</h4>
      </div>
      <div class="room-list" v-if="role === 0">
        <div
          class="d-flex justify-content-start py-2 room-item"
          v-for="(item, index) in admin"
          :key="index"
          @click="clickRoom(item)"
        >
          <div class="chat-img">
            <img
              v-if="!item.profileImage"
              src="../../../assets/img-admin.png"
            />
            <img
              v-if="item.profileImage"
              :src="`${process.env.VUE_APP_PORT}/user/` + item.profileImage"
            />
          </div>
          <div class="chat-msg">
            <div class="d-flex flex-column">
              <div>
                <p>
                  <strong>Admin - {{ item.fullName }}</strong>
                </p>
              </div>
              <div>
                <p class="text-grey">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div class="chat-info">
            <div class="d-flex flex-column ">
              <div class="text-right"><p class="text-grey time">08:30</p></div>

              <div class="unread-msg rounded-circle text-center mt-1">
                <p class="mt-1">14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="room-list" v-if="role === 1">
        <div class="d-flex justify-content-start py-2 room-item">
          <div class="chat-img">
            <img src="../../../assets/img-admin.png" />
          </div>
          <div class="chat-msg">
            <div class="d-flex flex-column">
              <div>
                <p>
                  <strong>user</strong>
                </p>
              </div>
              <div>
                <p class="text-grey">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div class="chat-info">
            <div class="d-flex flex-column ">
              <div class="text-right"><p class="text-grey time">08:30</p></div>

              <div class="unread-msg rounded-circle text-center mt-1">
                <p class="mt-1">14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import io from 'socket.io-client'

export default {
  data() {
    return {
      role: 0,
      socket: io('http://localhost:3000'),
      room: '',
      oldRoom: '',
      roomId: null
    }
  },
  created() {
    this.getAdminList()
  },
  computed: {
    ...mapGetters({
      admin: 'getterAdmin',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions([
      'getAdminList',
      'changeChatActive',
      'createRoomChat',
      'getRoomId'
    ]),
    ...mapMutations(['clearMessages']),
    async clickRoom(item) {
      const setData = {
        sender: this.user.userId,
        receiver: item.userId
      }
      // ========= create room =============
      await this.createRoomChat(setData)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
      // ======== chat this user ============
      await this.changeChatActive(item)
      // ======== socket io  ================
      await this.getRoomId(setData)
        .then(result => {
          this.roomId = result
        })
        .catch(error => {
          console.log(error)
        })
      const data = this.roomId
      if (this.oldRoom) {
        this.clearMessages()
        // this.getMessagesHistory(data)
        this.socket.emit('changeRoom', {
          username: this.user.fullName,
          room: data,
          oldRoom: this.oldRoom
        })
        this.oldRoom = data
      } else {
        this.clearMessages()
        // this.getMessagesHistory(data)
        this.socket.emit('joinRoom', {
          username: this.user.fullName,
          room: data
        })
        this.oldRoom = data
      }
    }
  }
}
</script>

<style scoped>
.room-container {
  background: #fff;
  padding: 10px;
  height: 633px;
}

.room-list {
  overflow: auto;
  height: 560px;
  padding-right: 8px;
}
.room-item:hover {
  background-color: rgb(142, 196, 231);
  border: black 1px solid;
}
p {
  margin-bottom: unset;
}

.row img {
  border-radius: 20px;
  width: 50px;
  height: 50px;
}

.chat-img {
  width: 20%;
}

.chat-msg {
  width: 65%;
}

.chat-info {
  width: 15%;
}

.text-grey {
  color: #6b6b6b;
}

.time {
  font-size: 12px;
}

.unread-msg {
  background: #2395ff;
  color: #fff;
  width: 23px;
  height: 23px;
  font-size: 12px;
  margin-left: auto;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #d1d1d1;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(177, 177, 177);
}
</style>
