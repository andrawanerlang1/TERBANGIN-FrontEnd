<template>
  <div class="Footer">
    <div class="logo">
      <div style="font-weight:bold;color:black">
        <img src="../assets/img/logoflight.png" style="margin-right:10px" />
        Terbang.in
      </div>
      <div style="margin-top:20px;line-height:30px">
        Find your Flight and explore the world with us. We will take care of the
        rest
      </div>
      <div style=" position: absolute;bottom: 0;left: 0;">
        © Ankasa. All Rights Reserved.
      </div>
    </div>
    <div class="features">
      <div style="color:black;font-weight:bold">Features</div>
      <br />
      <div>
        <p>Find Ticket</p>
        <p>My Booking</p>
        <p>Chat</p>
        <p>MNotification</p>
      </div>
    </div>
    <div class="download">
      <div style="color:black;font-weight:bold">Download App</div>
      <div>
        <img
          src="../assets/img/appstore.png"
          style="width:150px; margin-top: 20px"
        />
      </div>
      <div>
        <img
          src="../assets/img/playstore.png"
          style="width:150px; margin-top: 20px"
        />
      </div>
    </div>
    <div class="follow">
      <div style="color:black;font-weight:bold">Follow us</div>
      <div><img src="../assets/img/sosmed.png" style="margin-top:20px" /></div>
      <div style=" position: absolute;bottom: 0;left: 0;">
        <img src="../assets/img/map-pin.png" alt="" /> Jakarta Indonesia
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.Footer {
  padding: 40px 8% 60px 8%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #6b6b6b;
  background: #fff;
}
.logo {
  position: relative;
  width: 250px;
  height: 300px;
}
.follow {
  position: relative;
  height: 300px;
  width: 190px;
}
@media screen AND (max-width: 450px) {
  .logo,
  .follow,
  .features,
  .download {
    height: 200px;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    border-bottom: 2px black solid;
  }
}
</style>
