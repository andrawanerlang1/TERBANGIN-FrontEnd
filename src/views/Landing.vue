<template>
  <div class="landing">
    <b-container fluid>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </b-container>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/_base/Landing/HeaderLanding'
import Content from '../components/_base/Landing/ContentLanding'
export default {
  name: 'Landing',
  components: {
    Header,
    Content,
    Navbar,
    Footer
  }
}
</script>
