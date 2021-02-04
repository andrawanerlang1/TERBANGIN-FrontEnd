<template>
  <div>
    boarding
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Boarding',
  data() {
    return {}
  },
  created() {
    console.log(this.$route.params.id)
    this.userBoarding(this.$route.params.id)
  },
  methods: {
    userBoarding(input) {
      this.patchBoarding(input)
        .then(result => {
          alert(result)
        })
        .catch(error => {
          alert(error)
        })
    },
    patchBoarding(input) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_PORT}/booking/boarding-status/${input}`)
          .then(result => {
            resolve(result.data.msg)
          })
          .catch(error => {
            console.log(error)
            console.log('ini error')
            reject(error.response.data.msg)
          })
      })
    }
  }
}
</script>
