<template>
  <div>
    <div class="form">
      <div class="input-form">
        <p class="text-grey">Full Name</p>
        <input class="mb-1" type="text" placeholder="input your full name" />
      </div>
      <div class="input-form">
        <p class="text-grey">Email</p>
        <input class="mb-1" type="text" placeholder="input your email" />
      </div>
      <div class="input-form">
        <p class="text-grey">Phone Number</p>
        <div class="d-flex justify-content-start">
          <div>
            <select name="phone">
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
              class="mb-1 ml-2"
              type="text"
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
</style>
