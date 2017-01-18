<template lang="pug">
  .login
    #login
      a(id="show-modal", @click="showLogInModal=true") Log In
      app-modal(v-if="showLogInModal", @close="showLogInModal=false")
        h2(slot="header") Log In
        div(slot="body")
          button(@click="loginUser").button-facebook Log In with Facebook
</template>

<script>
  export default {
    data () {
      return {
        showLogInModal: false,
        user: {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang="stylus">

</style>