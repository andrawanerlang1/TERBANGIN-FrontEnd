<template>
  <div>
    <div class="form">
      <div class="top mb-4">
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-dark-grey">Pessanger: {{ passanger }}</p>
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
      <div
        class="form-input-passanger"
        v-for="(item, index) in passanger"
        :key="index"
      >
        <div class="input-form">
          <p class="text-grey">Title{{ index + 1 }}</p>
          <div>
            <select name="title" class="mb-2">
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option></select
            >
          </div>
        </div>
        <div class="input-form">
          <p class="text-grey">Fullname</p>
          <input
            v-model="item.name"
            class="mb-1"
            type="text"
            placeholder="input your full name"
          />
        </div>
        <div class="input-form mb-5">
          <p class="text-grey">Nationality</p>
          <div>
            <select name="nationality" class="mb-2">
              <option value="indonesia">Indonesia</option>
              <option value="usa">USA</option>
              <option value="japan">Japan</option></select
            >
          </div>
        </div>
      </div>
      <button @click="addPassanger">button</button>
      {{ form }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['passanger'],
  data() {
    return {
      form: []
    }
  },
  methods: {
    addPassanger() {
      this.form.push({
        name: ''
      })
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
</style>
