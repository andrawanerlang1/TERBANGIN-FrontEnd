<template>
  <div>
    <div
      class="room-container"
      style="
  border-radius: 15px;"
    >
      <div class="header">
        <h4>Chat</h4>
      </div>
      <div v-if="user.role === 0">
        <b-dropdown
          text="Pick Admin to chat"
          style="margin-bottom:20px; margin-top:10px;"
          variant="primary"
          dropright
        >
          <b-dropdown-item
            class="d-flex justify-content-start py-2 room-item"
            v-for="(item, index) in admin"
            :key="index"
            @click="makeRoom(item)"
            >{{ item.fullName }}</b-dropdown-item
          >
        </b-dropdown>
      </div>
      <div class="room-list">
        <div
          class="d-flex justify-content-start py-2 room-item"
          v-for="(item, index) in chatRoom"
          :key="index"
          @click="chatThisUser(item)"
        >
          <div class="chat-img">
            <img
              v-if="!item.profileImage"
              src="../../../assets/img-admin.png"
            />
            <img
              v-if="item.profileImage"
              :src="`${URL}/fileUploadsTerbangin/user/` + item.profileImage"
            />
          </div>
          <div class="chat-msg">
            <div class="d-flex flex-column">
              <div>
                <p>
                  <strong>{{ item.fullName }}</strong>
                </p>
              </div>
              <div>
                <p class="text-grey">
                  {{ item.message.slice(0, 10) + ' ...' }}
                </p>
              </div>
            </div>
          </div>
          <div class="chat-info">
            <div class="d-flex flex-column ">
              <div class="text-right">
                <p class="text-grey time">
                  {{ item.createdAt.slice(11, 16) }}
                </p>
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
      socket: io(`${process.env.VUE_APP_PORT}`, {
        withCredentials: true,
        extraHeaders: {
          'terbangin-header': 'ini terbangin header'
        }
      }),
      room: '',
      oldRoom: '',
      roomId: null,
      URL: process.env.VUE_APP_PORT
    }
  },
  created() {
    this.getAdminList()
    this.getChatRoom(this.user.userId)
    this.socket.on('chatMessage', data => {
      this.pushMessages(data)
      this.getChatRoom(this.user.userId)
    })
  },
  computed: {
    ...mapGetters({
      admin: 'getterAdmin',
      chatRoom: 'getChatRoom',
      user: 'setUser'
    })
  },
  methods: {
    ...mapActions([
      'getAdminList',
      'changeChatActive',
      'createRoomChat',
      'getRoomId',
      'getChatRoom',
      'getMessagesHistory'
    ]),
    ...mapMutations(['clearMessages', 'pushMessages']),

    async makeRoom(item) {
      const setData = {
        sender: this.user.userId,
        receiver: item.userId
      }
      await this.createRoomChat(setData)
        .then(result => {
          this.$toasted.success(result)
          this.getChatRoom(this.user.userId)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    chatThisUser(item) {
      this.changeChatActive(item)
      const data = item.roomIdUniq
      this.getMessagesHistory(data)
      if (this.oldRoom) {
        this.clearMessages()
        this.socket.emit('changeRoom', {
          username: this.user.fullName,
          room: data,
          oldRoom: this.oldRoom
        })
        this.oldRoom = item.roomIdUniq
      } else {
        this.clearMessages()
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
@media screen AND (max-width: 500px) {
  .room-container {
    height: auto;
  }
  .room-list {
    height: auto;
  }
}
</style>
