import Swal from 'sweetalert2'

export default {
  methods: {
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    successAlert(msg) {
      Swal.fire('Success', msg, 'success')
    },
    errorAlert(error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }
}
