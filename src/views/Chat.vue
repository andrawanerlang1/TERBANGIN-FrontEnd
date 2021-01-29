<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container>
        <b-row class="pt-2">
          <b-col col lg="4" md="4" sm="4" cols="4" style=" width:100%;"
            ><Room
          /></b-col>
          <b-col col lg="8" md="8" sm="8" cols="8" style="width:100%;"
            ><Content
          /></b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Room from '../components/_base/Chat/Room'
import Content from '../components/_base/Chat/Content'

export default {
  name: 'Chat',
  components: { Navbar, Footer, Room, Content }
}
</script>

<style scoped>
.main {
  background: #f30000;
}

.col {
  padding: unset;
}
</style>
