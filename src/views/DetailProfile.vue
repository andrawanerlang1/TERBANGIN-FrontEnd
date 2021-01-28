<template>
  <div class="detail-profile">
    <Navbar type="flight" />
    <div class="container">
      <b-row>
        <b-col><CardProfile /></b-col>
        <b-col>
          <div class="profile mt-3 p-4">
            <p class="sub">PROFILE</p>
            <h3>Profile</h3>
            <form>
              <div class="row mt-4">
                <div class="col-sm-6">
                  <p>Contact</p>
                  <label class="text-muted">Email</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">Phone Number</label>
                  <input type="text" class="form-control mb-4" />
                  <p class="text-right text-info">
                    Account Setting
                    <b-icon-chevron-right></b-icon-chevron-right>
                  </p>
                </div>
                <div class="col-sm-6">
                  <p>Biodata</p>
                  <label class="text-muted">Username</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">City</label>
                  <b-form-select>
                    <b-form-select-option disabled value="null"
                      >Select Category</b-form-select-option
                    >
                    <b-form-select-option>
                      Medan
                    </b-form-select-option>
                  </b-form-select>
                  <br />
                  <br />
                  <label class="text-muted">Address</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">Post Code</label>
                  <input type="text" class="form-control mb-4" />
                  <button type="submit" class="btn btn-save">Save</button>
                </div>
              </div>
            </form>
          </div>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardProfile from '../components/CardProfile'
import Footer from '../components/Footer'
export default {
  name: 'Profile',
  components: {
    Navbar,
    CardProfile,
    Footer
  }
}
</script>

<style scoped>
.detail-profile {
  background-color: #f5f6fa;
}
.profile {
  background-color: #fff;
  border-radius: 15px;
  width: 100vh;
  height: 100%;
  margin-bottom: 15px;
}
.sub {
  color: #2395ff;
  letter-spacing: 0.3em;
}
.sub,
h3,
p {
  font-weight: bolder;
}
input[type='text'],
input[type='password'],
select {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  /* -webkit-box-shadow: none; */
  box-shadow: none;
  border-radius: 0;
}
input[type='text']:focus,
input[type='password']:focus,
select:focus {
  /* -webkit-box-shadow: none; */
  box-shadow: none;
  border-bottom: 2px solid rgba(35, 159, 207, 0.68);
}
.btn-save {
  color: #fff;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 10px 35px;
}
@media (max-width: 768px) {
  .profile {
    width: 1000px;
    height: 100%;
    margin-bottom: 15px;
  }
}
@media (max-width: 576px) {
  .detail-profile {
    background-color: #fff;
  }
  .profile {
    width: 450px;
    height: 100%;
    margin-bottom: 15px;
  }
}
</style>
