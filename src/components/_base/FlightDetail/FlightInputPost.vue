<template>
  <div class="row mt-3 justify-content-center">
    <div class="col box mx-lg-2 mainWrapper">
      <div class="maskapai" style="font-weight:600">
        <div>
          Airlines
        </div>
        <div>
          <b-form-select
            v-model="mascapai"
            :options="options"
            size="sm"
            class="mt-3"
          ></b-form-select>
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Departure Time
        </div>
        <b-form-input type="time"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Arrival Time
        </div>
        <b-form-input type="time"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Flight Data
        </div>
        <b-form-input type="date"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Ticket Price (IDR) / pax
        </div>
        <b-form-input type="number" min="0" max="10000000"></b-form-input>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Facilities
        </div>
        <div style="display:flex;justify-content:space-around; font-weight:500">
          <b-form-checkbox value="wifi">Wifi</b-form-checkbox>
          <b-form-checkbox value="food">Meal</b-form-checkbox>
          <b-form-checkbox value="luggage">Luggage</b-form-checkbox>
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Capacity
        </div>
        <b-form-input type="number" min="10" max="5000"></b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mascapai: null,
      options: [
        { value: null, text: 'Please select airlines' },
        { value: 'garuda', text: 'Garuda Indonesia' },
        { value: 'lion', text: 'Lion Air' },
        { value: 'air', text: 'Air Asia' }
      ]
    }
  }
}
</script>

<style scoped>
.mainWrapper {
  padding-top: 30px;
}
.formSeparator {
  font-weight: 600;
}
.separatorName {
  margin-top: 20px;
  margin-bottom: 10px;
}
.maxMesg p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.message {
  font-family: Lato;
  font-size: 14px;
  line-height: 18px;
  color: #6b6b6b;
}
.time {
  font-family: Lato;
  font-size: 12px;
  line-height: 14px;
  color: #6b6b6b;
}
.congratulations {
  font-family: Lato;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #2395ff;
}
.box {
  background: #f7fbff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 13px;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
</style>
