<template>
  <div class="mainWrapper">
    <div class="filter">
      <div style="font-weight:bold; font-size: 20px">
        Select Ticket
        <span style="color:#979797;font-weight:300;font-size:15px">
          (6 flight found)
        </span>
      </div>
      <div style="font-weight:600">
        Sort By
        <b-dropdown variant="clear" right no-caret>
          <template #button-content>
            <img src="../../../assets/img/sort.png" alt="" />
          </template>
          <b-dropdown-item href="#">Price</b-dropdown-item>
          <b-dropdown-item href="#">Departure Time</b-dropdown-item>
          <b-dropdown-item href="#">Arrival Time</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="ticketCard">
      <div class="flightPlate" style="color:#595959">
        <img style="width:150px" src="../../../assets/img/garuda.png" />
        Garuda Indonesia
      </div>
      <div class="detailPlate">
        <div class="destination">
          <div class="from">
            <p style="font-weight:600; font-size:20px">IDN</p>
            <p style="color:#6B6B6B">12.33</p>
          </div>
          <div class="imageDesti">
            <p>
              <img src="../../../assets/img/logoGrey.png" />
            </p>
            <p></p>
          </div>
          <div class="to">
            <p style="font-weight:600; font-size:20px">JPN</p>
            <p style="color:#6B6B6B">15.21</p>
          </div>
        </div>
        <div class="time" style="text-align:center;color:#595959">
          <div>3 hours 11 minutes</div>
          <div>(1 transit)</div>
        </div>
        <div class="facilities">
          <img src="../../../assets/img/burger.png" alt="" />
          <img src="../../../assets/img/luggage.png" alt="" />
          <img src="../../../assets/img/wifi.png" alt="" />
        </div>
        <div class="price" style="color:#2395FF">
          $ 214,00 <span style="color:#979797">/pax </span>
        </div>
        <div class="select">
          <button>
            Select
          </button>
        </div>
      </div>
    </div>
    <div class="ticketCard">
      <div class="flightPlate" style="color:#595959">
        <img style="width:150px" src="../../../assets/img/garuda.png" />
        Garuda Indonesia
      </div>
      <div class="detailPlate">
        <div class="destination">
          <div class="from">
            <p style="font-weight:600; font-size:20px">IDN</p>
            <p style="color:#6B6B6B">12.33</p>
          </div>
          <div class="imageDesti">
            <p>
              <img src="../../../assets/img/logoGrey.png" />
            </p>
            <p></p>
          </div>
          <div class="to">
            <p style="font-weight:600; font-size:20px">JPN</p>
            <p style="color:#6B6B6B">15.21</p>
          </div>
        </div>
        <div class="time" style="text-align:center;color:#595959">
          <div>3 hours 11 minutes</div>
          <div>(1 transit)</div>
        </div>
        <div class="facilities">
          <img src="../../../assets/img/burger.png" alt="" />
          <img src="../../../assets/img/luggage.png" alt="" />
          <img src="../../../assets/img/wifi.png" alt="" />
        </div>
        <div class="price" style="color:#2395FF">
          $ 214,00 <span style="color:#979797">/pax </span>
        </div>
        <div class="select">
          <button>
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainWrapper {
  height: 700px;
  margin-left: 5%;
  margin-top: 30px;
  margin-right: 35px;
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.ticketCard {
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
}
.detailPlate {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.destination {
  display: flex;
  justify-content: space-between;
}
.destination div {
  margin-right: 20px;
}
.select button {
  background-color: #2395ff;
  border-radius: 15px;
  border: 0px;
  color: white;
  font-weight: 600;
  padding: 12px 50px 12px 50px;
  box-shadow: 0 8px 6px -6px black;
}
.facilities img {
  width: 30px;
}
</style>
