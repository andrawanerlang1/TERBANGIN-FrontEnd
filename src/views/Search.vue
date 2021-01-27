<template>
  <div class="home">
    <Navbar />
    <div class="mains">
      isi search
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  name: 'Search',
  components: { Navbar, Footer }
}
</script>

<style scoped>
.mains {
  background-color: #dfe1e9;
}
</style>
