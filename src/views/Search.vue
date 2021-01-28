<template>
  <div class="home">
    <Navbar />
    <div class="main">
      <b-container fluid>
        <b-row>
          <b-col cols="4">
            <Filters />
          </b-col>
          <b-col cols="8">
            <Ticket />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/_base/Search/Filter'
import Ticket from '../components/_base/Search/Ticket'

export default {
  name: 'Search',
  components: { Navbar, Footer, Filters, Ticket }
}
</script>

<style scoped>
.main {
  background-color: #f5f6fa;
}
</style>
