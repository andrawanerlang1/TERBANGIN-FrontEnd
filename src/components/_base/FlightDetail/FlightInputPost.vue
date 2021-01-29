<template>
  <div class="row mt-3 justify-content-center">
    <div class="col box mx-lg-2 mainWrapper" style="padding-bottom:50px">
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
      <div class="formSeparator">
        <div class="separatorName">
          Flight Route
        </div>
        <div class="routeCard">
          <div>
            From :
            <div style="display:flex">
              <b-form-select
                v-model="from"
                :options="place"
                required
              ></b-form-select>
            </div>
          </div>
          <div>
            To :
            <div style="display:flex">
              <b-form-select
                v-model="to"
                :options="place"
                required
              ></b-form-select>
            </div>
          </div>
        </div>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Terminal
        </div>
        <b-form-select
          v-model="terminal"
          :options="terminals"
          required
        ></b-form-select>
      </div>
      <div class="formSeparator">
        <div class="separatorName">
          Transit
        </div>
        <b-form-select
          v-model="transit"
          :options="transits"
          required
        ></b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mascapai: null,
      from: null,
      to: null,
      terminal: null,
      transit: null,
      options: [
        { value: null, text: 'Please select airlines' },
        { value: 'garuda', text: 'Garuda Indonesia' },
        { value: 'lion', text: 'Lion Air' },
        { value: 'air', text: 'Air Asia' }
      ],
      place: [
        { value: null, text: 'Please select the place' },
        { value: '[Medan, Indonesia]', text: 'Medan, Indonesia' },
        { value: '[Jakarta, Indonesia]', text: 'Jakarta, Indonesia' },
        { value: '[Tokyo, Jepang]', text: 'Tokyo, Jepang' },
        { value: '[Kuala, Malaysia]', text: 'Kuala Lumpur, Malaysia' }
      ],
      terminals: [
        { value: null, text: 'Please select terminal' },
        { value: 'A', text: 'Terminal A' },
        { value: 'B', text: 'Terminal B' },
        { value: 'C', text: 'Terminal C' }
      ],
      transits: [
        { value: null, text: 'Please select terminal' },
        { value: '0', text: 'Direct Flight' },
        { value: '1', text: 'Transit Once' },
        { value: '2', text: 'Transit Twice' }
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
.routeCard {
  border-radius: 15px;
  width: 70%;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  display: flex;
  justify-content: space-around;
  padding: 10px;
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
