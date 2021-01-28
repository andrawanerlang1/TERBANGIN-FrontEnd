<template>
  <div>
    <div class="form">
      <div class="top mb-4">
        <div class="d-flex justify-content-between align-items-center">
          <div class="travel-insurance">
            <input type="checkbox" />
            <label class="ml-3">Travel Insurance</label>
          </div>
          <div>
            <span class="text-blue">$ 2,00</span>
            <span class="text-dark-grey">/pax</span>
          </div>
        </div>
      </div>
      <hr />
      <p>Get travel compensation up to $ 10.000,00</p>
    </div>
  </div>
</template>

<style scoped>
.form {
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
}

.travel-insurance {
  margin-bottom: unset;
}

input[type='checkbox'] {
  width: 15px;
  height: 15px;
}

p {
  margin-bottom: 5px;
}

label {
  font-weight: 600;
  margin-bottom: unset;
}

.text-grey {
  color: #9b96ab;
  font-size: 14px;
}

.text-dark-grey {
  color: #595959;
}

.text-blue {
  color: #2395ff;
  font-weight: 600;
}
</style>
