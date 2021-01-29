<template>
  <div>
    <div class="chat-content">
      <div class="header">
        <div class="d-flex flex-row align-items-center">
          <div class="profile-img">
            <img src="../../../assets/img-admin.png" />
          </div>
          <div class="profile-name">
            <p class="ml-3">Firman - Admin</p>
          </div>
        </div>
      </div>
      <div class="chat-list">
        <div class="chat" v-for="item in pesanList" :key="item">
          <div v-if="userId !== item.id" class="left mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="img mr-2">
                <img
                  src="../../../assets/img-admin.png"
                  class="profile-img-chat "
                />
              </div>
              <div class="msg">
                <p>{{ item.pesan }}</p>
              </div>
            </div>
          </div>
          <div v-else class="right mt-1">
            <div class="d-flex flex-row align-items-end">
              <div class="msg ml-auto">
                <p>
                  {{ item.pesan }}
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
          <input type="text" placeholder="type your message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      userId: 1,
      pesanList: [
        {
          id: 1,
          pesan: 'hallo teman'
        },
        {
          id: 2,
          pesan: 'uy hallo broh'
        },
        {
          id: 2,
          pesan: 'pesan dari kiri'
        },
        {
          id: 1,
          pesan: 'pesan kanan'
        },
        {
          id: 2,
          pesan: 'kiri lagi'
        },
        {
          id: 1,
          pesan: 'kanan dong'
        },
        {
          id: 1,
          pesan: 'kanan lagi nih'
        },
        {
          id: 2,
          pesan: 'uy hallo broh'
        },
        {
          id: 2,
          pesan: 'pesan dari kiri'
        },
        {
          id: 1,
          pesan: 'pesan kanan'
        },
        {
          id: 2,
          pesan: 'kiri lagi'
        },
        {
          id: 1,
          pesan: 'kanan dong'
        },
        {
          id: 1,
          pesan: 'kanan lagi nih'
        }
      ]
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
  background: #fff;
}
.chat-input {
  height: 100px;
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
  background: #ededed;
  padding: 10px;
}

.profile-name {
  font-weight: 600;
  font-size: 18px;
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
  background: rgba(221, 221, 221, 0.8);
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
</style>
