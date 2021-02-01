<template>
  <div>
    <div class="form">
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="input-form">
        <p class="text-grey">Full Name</p>
        <input
          v-model="formBooking.contactFullName"
          class="mb-1"
          type="text"
          placeholder="input your full name"
        />
      </div>
      <div class="input-form">
        <p class="text-grey">Email</p>
        <input
          v-model="formBooking.contactEmail"
          class="mb-1"
          type="email"
          placeholder="input your email"
        />
      </div>
      <div class="input-form">
        <p class="text-grey">Phone Number</p>
        <div class="d-flex justify-content-start">
          <div>
            <select v-model="formBooking.phoneCode" name="phone">
              <option value="+62">+62 (ID)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+81">+81 (JPN)</option></select
            >
          </div>
          <div>
            <p class="ml-2">
              |
            </p>
          </div>
          <div>
            <input
              v-model="formBooking.phoneNumber"
              class="mb-1 ml-2"
              type="number"
              placeholder="input your phone number"
            />
          </div>
        </div>
      </div>
      <div class="warning d-flex align-items-center">
        <div>
          <img src="../../../assets/icon-warning.png" />
        </div>
        <div>
          <span class="text-dark-grey ml-2">
            Make sure the customer data is correct</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formBooking', 'error']
}
</script>

<style scoped>
.form {
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
}

input {
  border: unset;
  width: 100%;
  outline: unset;
  transition-duration: 0.6s;
}

.input-form {
  border-bottom: 1px solid #d2c2ff;
  margin-bottom: 25px;
}

select {
  border: unset;
  background: #fff;
  outline: unset;
}

/* input:focus {
  border-bottom: 1px solid #2395ff;
} */

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

.error {
  background: rgba(255, 106, 106, 0.5);
  border-radius: 10px;
  padding: 3px 3px 3px 15px;
  font-size: 12px;
  margin-top: -20px;
  width: 220px;
}
</style>
