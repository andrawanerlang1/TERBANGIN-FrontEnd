<template>
  <div class="content">
    <b-container>
      <div class="sub-title">
        <div>
          <h6 style="color: #2395ff;letter-spacing: 0.3em;">
            TRENDING
          </h6>
          <h3 style="line-height: 36px;">Trending destinations</h3>
        </div>
        <h6 style="color: #2395ff;font-weight:600">View all</h6>
      </div>
      <div class="trending">
        <div class="trending-konten">
          <img
            class="trending-img"
            src="../../../assets/img/trending1.png"
            alt=""
          />
          <div class="trending-text">
            <p>
              Tokyo, <br />
              <span>Japan</span>
            </p>
          </div>
        </div>
        <div class="trending-konten">
          <img
            class="trending-img"
            src="../../../assets/img/trendin2.png"
            alt=""
          />
          <div class="trending-text">
            <p>
              Barcelona, <br />
              <span>Spain</span>
            </p>
          </div>
        </div>
        <div class="trending-konten">
          <img
            class="trending-img"
            src="../../../assets/img/trending1.png"
            alt=""
          />
          <div class="trending-text">
            <p>
              Tokyo, <br />
              <span>Japan</span>
            </p>
          </div>
        </div>
        <div class="trending-konten">
          <img
            class="trending-img"
            src="../../../assets/img/trendin2.png"
            alt=""
          />
          <div class="trending-text">
            <p>
              Barcelona, <br />
              <span>Spain</span>
            </p>
          </div>
        </div>
        <div class="trending-konten">
          <img
            class="trending-img"
            src="../../../assets/img/trending1.png"
            alt=""
          />
          <div class="trending-text">
            <p>
              Tokyo, <br />
              <span>Japan</span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="bg">
        <div class="card-top-ten">
          <div>
            <div style="margin-top:60px">
              <h6 style="text-align:center">TOP 10</h6>
              <h3 style="text-align:center">Top 10 destinations</h3>
            </div>
            <div class="list-img">
              <div style="margin-bottom: 40px;">
                <img src="../../../assets/img/img5.png" alt="" />
                <h6 style="font-weight:bold;text-align:center">PARIS</h6>
              </div>
              <div>
                <img src="../../../assets/img/img4.png" alt="" />
                <h6 style="font-weight:bold;text-align:center">BALI</h6>
              </div>
              <div>
                <img src="../../../assets/img/img3.png" alt="" />
                <h6 style="font-weight:bold;text-align:center">SINGAPORE</h6>
              </div>
              <div>
                <img src="../../../assets/img/img2.png" alt="" />
                <h6 style="font-weight:bold;text-align:center">AGRA</h6>
              </div>
              <div>
                <img src="../../../assets/img/img1.png" alt="" />
                <h6 style="font-weight:bold;text-align:center">SYDNEY</h6>
              </div>
            </div>
            <div style="margin-bottom: 70px;">
              <center>
                <b-button class="btn-next" style="margin-right:15px"
                  ><b-icon icon="chevron-left" class="icons"></b-icon
                ></b-button>
                <b-button class="btn-next" style="margin-left:15px"
                  ><b-icon icon="chevron-right" class="icons"></b-icon
                ></b-button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'ContentLanding',
  component: {}
}
</script>

<style scoped>
.btn-next {
  color: white;
  background-color: #2395ff;
  border: 1px solid white;
  border-radius: 10px;
}
.btn-next:hover {
  color: #2395ff;
  background-color: white;
  border: 1px solid #2395ff;
}
.bg {
  /* The image used */
  background-image: url('../../../assets/img/bgTopDestination.png');
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  border-radius: 60px;
}
.card-top-ten {
  display: flex;
  justify-content: center;
}
.list-img {
  display: flex;
  overflow: auto;
}
.list-img div img {
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  padding: 8px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-top: 60px;
}
.trending {
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
}
.trending-konten,
.trending-img {
  position: relative;
}

.sub-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.trending-img {
  height: 262px;
  width: 206px;
  border-radius: 20px;
  object-fit: cover;
}
.trending-text {
  z-index: 3;
  position: absolute;
  top: 0;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  font-family: Poppins;
  font-weight: 600;
}
span {
  font-weight: 600;
  font-size: 24px;
}
h6 {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}
h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
}
.content {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media screen AND (max-width: 1000px) {
  .list-img {
    width: 650px;
  }
}

@media screen AND (max-width: 770px) {
  .list-img {
    width: 450px;
  }
}
@media screen AND (max-width: 560px) {
  .list-img {
    width: 350px;
  }
}
@media screen AND (max-width: 460px) {
  .list-img {
    width: 250px;
  }
}
</style>
