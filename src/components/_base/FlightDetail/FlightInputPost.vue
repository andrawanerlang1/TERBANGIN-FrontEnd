<template>
  <div class="row mt-3 justify-content-center">
    <div class="col box mx-lg-2">
      isi
    </div>
  </div>
</template>

<style scoped>
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
@media screen and (max-width: 550px) {
  .box {
    width: 269px;
    height: 150px;
    background: #f7fbff;
    border: 1px solid #2395ff;
    box-sizing: border-box;
    border-radius: 13px;
  }
  .message {
    font-family: Lato;
    font-size: 12px;
    line-height: 18px;
    color: #6b6b6b;
  }
}
</style>
