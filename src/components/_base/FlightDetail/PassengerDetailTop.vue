<template>
  <div>
    <div class="form">
      <div class="top mb-4">
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-dark-grey">Passenger : {{ formPassenger.length }}</p>
          </div>
          <div>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
                checked
              />
              <label
                class="custom-control-label text-dark-grey"
                for="customSwitch1"
                >Same as contact person</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form-input-passenger">
        <div v-if="errorPassenger" class="error">
          {{ errorPassenger }}
        </div>
        <div class="input-form">
          <p class="text-grey">Title</p>
          <div>
            <select v-model="passenger.title" name="title" class="mb-2">
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>
        </div>
        <div class="input-form">
          <p class="text-grey">Fullname</p>
          <input
            v-model="passenger.fullName"
            class="mb-1"
            type="text"
            placeholder="input your full name"
          />
        </div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <div class="input-form">
          <p class="text-grey">Nationality</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <select
                v-model="passenger.nationality"
                name="nationality"
                class="mb-2"
              >
                <option value="Indonesia">Indonesia</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option></select
              >
            </div>
            <div class="text-right">
              <button
                v-if="formPassenger.length < maxPassanger"
                class="btn-add"
                @click="addPassenger"
              >
                Add passenger
              </button>
            </div>
          </div>
        </div>
        <table v-if="formPassenger.length > 0" class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Passenger Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formPassenger" :key="index">
              <td scope="row">{{ index + 1 }}</td>
              <td>{{ item.title }} {{ item.fullName }}</td>
              <td>{{ item.nationality }}</td>
              <td>
                <button @click="removePassenger(index)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'formBooking',
    'formPassenger',
    'passenger',
    'flight',
    'params',
    'errorPassenger'
  ],
  data() {
    return {
      error: ''
    }
  },
  computed: {
    maxPassanger() {
      if (this.params.totalPassanger) {
        return this.params.totalPassanger
      } else {
        return 10
      }
    }
  },
  methods: {
    addPassenger() {
      if (this.passenger.fullName === '') {
        return (this.error = '*Please fill passenger name')
      }

      this.formPassenger.push({
        title: this.passenger.title,
        fullName: this.passenger.fullName,
        nationality: this.passenger.nationality
      })
      this.passenger.fullName = ''
      this.error = ''
    },
    removePassenger(index) {
      this.formPassenger.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.form {
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
}

.top {
  background: rgba(186, 206, 255, 0.5);
  border-radius: 10px;
  padding: 13px 20px;
}

.error {
  background: rgba(255, 106, 106, 0.5);
  border-radius: 10px;
  padding: 3px 3px 3px 15px;
  font-size: 12px;
  margin-top: -20px;
  width: 220px;
}

input {
  border: unset;
  width: 100%;
  outline: unset;
  transition-duration: 0.6s;
}

select {
  border: unset;
  background: #fff;
  outline: unset;
}

.input-form {
  border-bottom: 1px solid #d2c2ff;
  margin-bottom: 25px;
}

p {
  margin-bottom: 5px;
}
.text-grey {
  color: #9b96ab;
  font-size: 14px;
}

.text-dark-grey {
  color: #595959;
}

.btn-add {
  background-color: #2395ff;
  color: #fff;
  font-size: 14px;
  padding: 8px;
  outline: unset;
  border: unset;
  border-radius: 5px;
  margin-bottom: 5px;
  transition-duration: 0.6s;
}

.btn-add:hover {
  background-color: #0080f8;
}
</style>
