<template>
  <div>
    <b-row>
      <b-col md="7" lg="7" xl="7" style="padding:0px">
        <div class="title">
          <div class="title-header">
            <h1>Find your</h1>
            <h1 style="margin-left:10px;color:#2395FF">Flight</h1>
          </div>
          <p style="color:#B1B1B1">and explore the world with us</p>
        </div>
        <img class="images" src="../../../assets/img/leftImg.png" alt="" />
      </b-col>
      <b-col md="5" lg="5" xl="5" style="padding:0px">
        <img
          class="images"
          style="float:right"
          src="../../../assets/img/rightImg.png"
          alt=""
        />
        <img class="image-blue" src="../../../assets/img/vector6.png" alt="" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderLanding',
  component: {}
}
</script>

<style scoped>
.title {
  margin-left: 45px;
  margin-top: 80px;
  margin-bottom: 60px;
}
.title-header {
  display: flex;
}
h1 {
  font-weight: 600;
  color: #414141;
}
.images {
  width: 97%;
  max-width: 1094px;
  height: auto;
  max-height: 450px;
}
.image-blue {
  width: 40%;
  margin-top: 20px;
}
</style>
