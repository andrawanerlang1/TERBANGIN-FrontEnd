<template>
  <div class="mainWrapper">
    <div class="filter">
      <div style="font-weight:bold; font-size: 20px">Filter</div>
      <div style="color:#2395FF;font-weight:600">Reset</div>
    </div>
    <div class="filterCard">
      <div class="transit">
        <b-navbar toggleable>
          Transit
          <b-navbar-toggle target="Transit">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Transit" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Direct</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="direct" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Transit</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="transit" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Transit 2+</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="transit2" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="facilities">
        <b-navbar toggleable>
          Facilities
          <b-navbar-toggle target="Facilities">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Facilities" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Luggage</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="Luggage" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">In-Flight Meal</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="Meal" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Wi-fi</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="wifi" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="departure">
        <b-navbar toggleable>
          Departure Time
          <b-navbar-toggle target="Departure">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Departure" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">00:00 - 06:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="dep1" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">06:00 - 12:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="dep2" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">12:00 - 18:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="dep3" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">18:00 - 24:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="dep3" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="arrive">
        <b-navbar toggleable>
          Time Arrived
          <b-navbar-toggle target="Arrived">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Arrived" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">00:00 - 06:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="arv1" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">06:00 - 12:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="arv2" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">12:00 - 18:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="arv3" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">18:00 - 24:00</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="arv4" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="airlines">
        <b-navbar toggleable>
          Airlines
          <b-navbar-toggle target="Airlines">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Airlines" is-nav>
            <b-navbar-nav style="margin-top:20px">
              <div class="choice">
                <div class="name" style="font-weight:300">Garuda Indonesia</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="garuda" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Air Asia</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="airasia" />
                </div>
              </div>
              <div class="choice">
                <div class="name" style="font-weight:300">Lion Air</div>
                <div class="checkbox">
                  <input type="checkbox" v-model="lion" />
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="ticket">
        <b-navbar toggleable>
          Ticket Price
          <b-navbar-toggle target="Price">
            <template #default="{ expanded }">
              <img v-if="expanded" src="../../../assets/img/btnback1.png" />
              <img v-else src="../../../assets/img/btnback.png" />
            </template>
          </b-navbar-toggle>
          <b-collapse id="Price" is-nav>
            <b-navbar-nav style="margin-top:20px"> </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transit: null
    }
  }
}
</script>

<style scoped>
.mainWrapper {
  height: 700px;
  margin-left: 5%;
  margin-top: 30px;
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.filterCard {
  background-color: white;
  border-radius: 15px;
  margin-top: 20px;
  padding: 25px;
}
.filterCard div {
  font-weight: bold;
}
.choice {
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
}
</style>
