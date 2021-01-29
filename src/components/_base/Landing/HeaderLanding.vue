<template>
  <div>
    <div class="search">
      <div style="font-size:16px; font-weight:600">
        <p>Hey,</p>
        <p>Where you want to go?</p>
        <div class="detailSearch">
          <div>
            <p style="font-weight:500; font-size:14px; color:#979797">from</p>
            <p style="font-size:25px">Medan</p>
            <p style="font-weight:500">Indonesia</p>
          </div>
          <div style="margin-top:40px">
            <img src="../../../assets/img/arrowreverse.png" alt="" />
          </div>
          <div style="text-align:right">
            <p style="font-weight:500; font-size:14px; color:#979797">to</p>
            <p style="font-size:25px">Shanghai</p>
            <p style="font-weight:500">China</p>
          </div>
        </div>
        <div class="trip">
          <div style="background-color:#2395FF;color:white" class="buttonTrip">
            <img src="../../../assets/img/logowhite.png" /> One Way
          </div>
          <div class="buttonTrip">
            <img src="../../../assets/img/roundarrow.png" /> Round Trip
          </div>
        </div>
        <div class="departure">
          Departure
          <b-form-datepicker
            id="datepicker-placeholder"
            placeholder="Choose a date"
            locale="en"
            style="margin-top:10px"
          ></b-form-datepicker>
        </div>
        <div class="departure">
          How many person?
          <b-form-input
            type="number"
            placeholder="number of passengers"
            style="margin-top:10px"
          ></b-form-input>
        </div>
        <div class="departure">
          Which class do you want?
          <div class="searchRadio">
            <b-form-radio>Economy</b-form-radio>
            <b-form-radio>Business</b-form-radio>
            <b-form-radio>First Class</b-form-radio>
          </div>
        </div>
        <div class="searchButton">
          <button>Search FLight</button>
        </div>
      </div>
    </div>
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
.search {
  background-color: white;
  width: 380px;
  border-radius: 15px;
  position: absolute;
  z-index: 10;
  right: 30%;
  top: 170px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
.detailSearch {
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
  padding-top: 10px;
  line-height: 20px;
  height: 120px;
  margin-top: 30px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
}
.trip {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.buttonTrip {
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  padding: 10px 15px 10px 15px;
}
.departure {
  font-size: 16px;
  color: #6b6b6b;
  font-weight: 500;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.searchRadio {
  margin-top: 10px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
}
.searchButton {
  text-align: center;
  margin: 20px 10px 10px 10px;
  box-shadow: 0px 8px 9px rgba(14, 63, 108, 0.19);
}
.searchButton button {
  background-color: #2395ff;
  color: white;
  border: 0px;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  width: 100%;
}
</style>
