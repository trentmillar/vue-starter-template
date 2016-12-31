<template lang="pug">
  .login
    #login
      a(id="show-modal", @click="showLogInModal=true") Log In
      app-modal(v-if="showLogInModal", @close="showLogInModal=false")
        h2(slot="header") Log In
        div(slot="body")
          button().button-facebook Log In with Facebook
</template>

<script>
  export default {
    props:{
      user: Object
    },
    data () {
      return {
        showLogInModal: false
      }
    }
  }
</script>

<style lang="stylus">

</style>