<template>
  <div class="card-main mt-3">
    <div class="sub-card m-4">
      <form>
        <div class="text-center">
          <div class="user-profile">
            <img
              src="../assets/img/profile.png"
              alt="profile"
              class="rounded-circle mt-4"
            />
          </div>
          <label class="custom-file-upload">
            <input type="file" />
            Select Photo
          </label>
          <h5>Andrawan Ganteng</h5>
          <p class="small text-muted">Medan, Indonesia</p>
        </div>
      </form>
      <b-row>
        <b-col><b>Cards</b></b-col>
        <b-col><p class="text-info text-right">+ Add</p></b-col>
      </b-row>
      <div class="mini-card">
        <b>4441 1235 5512 5551</b>
        <b-row>
          <b-col><p>X Card</p></b-col>
          <b-col><p class="text-right">$ 1,440.2</p></b-col>
        </b-row>
      </div>

      <div class="menu">
        <ul>
          <li class="text-primary">
            <router-link to="/detail-profile">
              <b-icon-person-circle class="mr-3"></b-icon-person-circle> Profile
            </router-link>
          </li>
          <li>
            <b-icon-star-fill class="text-secondary mr-3"></b-icon-star-fill> My
            Review
          </li>
          <li>
            <b-icon-gear-fill class="text-secondary mr-3"></b-icon-gear-fill>
            Reset Password
          </li>
          <li class="text-danger">
            <b-icon-box-arrow-right class="mr-3"></b-icon-box-arrow-right>Logout
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type='file'] {
  display: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2395ff;
  margin-bottom: 15px;
}
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  margin: auto;
}
.user-profile img {
  width: 100px;
  height: 90px;
  border: 3px solid #2395ff;
  padding: 5px;
  margin-bottom: 15px;
}
.btn-photo {
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
h5 {
  font-weight: bolder;
}
p {
  font-size: 12px;
}
.mini-card {
  background-color: #2395ff;
  color: #fff;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
  padding: 15px;
}
.mini-card b {
  letter-spacing: 2.3px;
}
.mini-card p {
  color: #aefaff;
}
.menu ul li {
  margin-top: 20px;
  list-style: none;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 1008px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
@media (max-width: 576px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
</style>
