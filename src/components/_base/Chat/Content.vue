<template>
  <div>
    <div v-if="chatMode" class="chat-content" style="margin-bottom:100px;">
      <div class="header" style="border-radius: 15px 15px 0px 0px">
        <div class="d-flex flex-row align-items-center">
          <div class="profile-img">
            <img
              v-if="!chatActive.profileImage"
              src="../../../assets/img-admin.png"
              style="width:50px;height:50px;border-radius:15px;"
            />
            <img
              id="imageUploads"
              class="imgUpload"
              style="width:50px;height:50px;border-radius:15px;"
              v-if="chatActive.profileImage"
              :src="'http://localhost:3000/user/' + chatActive.profileImage"
            />
          </div>
          <div class="profile-name">
            <p class="ml-3">{{ chatActive.fullName }}</p>
          </div>
        </div>
      </div>
      <div class="chat-list">
        <div class="chat" v-for="item in messagesHistory" :key="item">
          <div v-if="user.userId !== item.userId" class="left mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="img mr-2">
                <img
                  src="../../../assets/img-admin.png"
                  class="profile-img-chat "
                />
              </div>
              <div class="msg">
                <p>{{ item.message }}</p>
                <p style="font-size: 10px; text-align:left;color:white">
                  {{ item.createdAt.slice(11, 16) }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="right mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="msg ml-auto">
                <p>
                  {{ item.message }}
                </p>
                <p style="font-size: 10px; text-align:right;color:grey">
                  {{ item.createdAt.slice(11, 16) }}
                </p>
              </div>

              <div class="img ml-2">
                <img
                  src="../../../assets/img-admin.png"
                  class="profile-img-chat "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="chat" v-for="item in messages" :key="item">
          <div v-if="user.userId !== item.sender" class="left mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="img mr-2">
                <img
                  src="../../../assets/img-admin.png"
                  class="profile-img-chat "
                />
              </div>
              <div class="msg">
                <p>{{ item.message }}</p>
                <p style="font-size: 10px; text-align:right;color:white">
                  {{ item.time }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="right mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="msg ml-auto">
                <p>
                  {{ item.message }}
                </p>
                <p style="font-size: 10px; text-align:right;color:grey">
                  {{ item.time }}
                </p>
              </div>
              <div class="img ml-2">
                <img
                  src="../../../assets/img-admin.png"
                  class="profile-img-chat "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <div class="input-border">
          <form v-on:submit.prevent="sendMessage">
            <input
              v-model="message"
              type="text"
              placeholder="type your message"
            />
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="!chatMode"
      class="chatEmpty"
      style="border-radius: 15px 15px 0px 0px"
    >
      <div>Please select a chat to start messaging</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'Chat',

  computed: {
    ...mapGetters({
      user: 'setUser',
      chatMode: 'getterChatMode',
      chatActive: 'getterChatActive',
      activeRoom: 'getterActiveRoom',
      messages: 'getterMessages',
      messagesHistory: 'getterMessagesHistory'
    })
  },
  data() {
    return {
      socket: io('http://localhost:3000'),
      message: '',
      userId: 1,
      pesanList: [
        {
          id: 1,
          pesan: 'hallo teman'
        },
        {
          id: 2,
          pesan: 'uy hallo broh'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['sendMessages', 'getChatRoom']),
    sendMessage() {
      var today = new Date()
      var time = today.getHours() + ':' + today.getMinutes()
      const setData = {
        sender: this.user.userId,
        message: this.message,
        room: this.chatActive.roomIdUniq,
        time: time
      }
      this.socket.emit('roomMessage', setData)
      //kode untuk kirim message ke DATABASE message ==============================================
      const dataMessage = {
        roomIdUniq: this.chatActive.roomIdUniq,
        sender: this.user.userId,
        receiver: this.chatActive.userId,
        message: this.message
      }
      this.sendMessages(dataMessage)
      // ========================================================
      this.message = ''
      this.getChatRoom(this.user.userId)
    }
  }
}
</script>

<style scoped>
.header {
  height: 70px;
}
.chat-list {
  height: 500px;
  border-right: 1px solid #ededed;
  border-left: 1px solid #ededed;
  padding: 10px;
  overflow: auto;
  background: rgb(238, 234, 234);
}
.chat-input {
  height: 10px;
}

p {
  margin-bottom: unset;
}

input {
  border: unset;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  outline: unset;
}

.input-border {
  background: #ededed;
  padding: 10px;
}

.header {
  background: rgba(0, 17, 255, 0.8);
  padding: 10px;
  border: rgb(44, 31, 43) 1px solid;
}

.profile-name {
  font-weight: 600;
  font-size: 18px;
  color: white;
}

.profile-img img {
  height: 45px;
  width: 45px;
  border-radius: 10px;
}

.profile-img-chat {
  height: 35px;
  width: 35px;
  border-radius: 10px;
}

.left .msg {
  background: rgba(0, 17, 255, 0.8);
  padding: 8px 15px 8px 20px;
  border-radius: 15px 10px 15px 5px;
  color: white;
  max-width: 50%;
}

.right {
  margin-left: auto;
}

.right .msg {
  background: white;
  padding: 8px 20px 8px 15px;
  border-radius: 15px 15px 5px 15px;
  color: rgb(0, 0, 0);
  max-width: 50%;
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
.chatEmpty {
  background-color: white;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
