<template>
  <div>
    <div class="search">
      <b-modal centered ref="my-modal" hide-footer title="Choose City">
        <b-form>
          <label>Form City</label>
          <b-form-select v-model="form.fromCity" class="mb-3">
            <b-form-select-option :value="null"
              >Please select an option</b-form-select-option
            >
            <b-form-select-option value="Surabaya"
              >Surabaya</b-form-select-option
            >
            <b-form-select-option value="Medan">Medan</b-form-select-option>
          </b-form-select>
          <label>To City</label>
          <b-form-select v-model="form.toCity" class="mb-3">
            <b-form-select-option :value="null"
              >Please select an option</b-form-select-option
            >
            <b-form-select-option value="Surabaya"
              >Surabaya</b-form-select-option
            >
            <b-form-select-option value="Medan">Medan</b-form-select-option>
          </b-form-select>
          <b-button variant="primary" block @click="hideModal">Done</b-button>
        </b-form>
      </b-modal>
      <div style="font-size:16px; font-weight:600">
        <p>Hey,</p>
        <p>Where you want to go?</p>
        <div class="detailSearch">
          <div @click="showModal">
            <p style="font-weight:500; font-size:14px; color:#979797">from</p>
            <p style="font-size:25px">{{ form.fromCity }}</p>
            <p style="font-weight:500">Indonesia</p>
          </div>
          <div style="margin-top:40px">
            <img
              style="cursor:pointer"
              @click="swap"
              src="../../../assets/img/arrowreverse.png"
              alt=""
            />
          </div>
          <div style="text-align:right">
            <p style="font-weight:500; font-size:14px; color:#979797">to</p>
            <p style="font-size:25px">{{ form.toCity }}</p>
            <p style="font-weight:500">Indonesia</p>
          </div>
        </div>
        <b-form @submit.prevent="searchData">
          <div class="trip">
            <div
              style="background-color:#2395FF;color:white"
              class="buttonTrip"
            >
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
              v-model="form.flightDate"
              required
            ></b-form-datepicker>
          </div>
          <div class="departure">
            How many person?
            <b-form-input
              type="number"
              placeholder="number of passengers"
              style="margin-top:10px"
              v-model="form.totalPassanger"
              required
            ></b-form-input>
          </div>
          <div class="departure">
            Which class do you want?
            <div class="searchRadio">
              <b-form-radio name="clas" v-model="form.clas" value="1" required
                >Economy</b-form-radio
              >
              <b-form-radio name="clas" v-model="form.clas" value="2"
                >Business</b-form-radio
              >
              <b-form-radio name="clas" v-model="form.clas" value="3"
                >First Class</b-form-radio
              >
            </div>
          </div>
          <div class="searchButton">
            <button type="submit">Search FLight</button>
          </div>
        </b-form>
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
import { mapActions, mapMutations, mapGetters } from 'vuex'
import alert from '../../../mixins/alert'
export default {
  name: 'HeaderLanding',
  mixins: [alert],
  data() {
    return {
      form: {
        fromCity: 'Surabaya',
        toCity: 'Medan',
        flightDate: '',
        clas: '',
        totalPassanger: ''
      }
    }
  },
  created() {},
  computed: {
    ...mapGetters(['getParams'])
  },
  methods: {
    ...mapActions(['search']),
    ...mapMutations(['setParams']),
    showModal() {
      this.$refs['my-modal'].show()
    },
    swap() {
      const data1 = this.form.fromCity
      const data2 = this.form.toCity
      const data3 = data2
      const data4 = data1
      if (data3 === data2) {
        this.form.fromCity = data3
        this.form.toCity = data4
      }
    },
    hideModal() {
      if (this.form.fromCity === this.form.toCity) {
        this.makeToast('Same value !', 'Change your input value', 'warning')
      } else if (this.form.toCity === null || this.form.fromCity === null) {
        this.makeToast('input empty !', 'Fill your input', 'warning')
      } else {
        this.$refs['my-modal'].hide()
      }
    },
    searchData() {
      this.setParams(this.form)
      this.search()
        .then(result => {
          this.makeToast('Done', `${result.length} Flight Found`, 'primary')
          setTimeout(() => {
            this.$router.push('/search')
          }, 3000)
        })
        .catch(error => {
          this.makeToast('Warning', `${error.data.msg}`, 'danger')
        })
    }
  }
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
