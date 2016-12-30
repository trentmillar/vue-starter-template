<template lang="pug">
  doctype html

  #root
    div(todo-page-component)
      app-header
    app-page-content


  //
    img(src="./assets/logo.png")
    h1 {{ msg }}
    h2 Links
    ul
      li: a(href="https://vuejs.org", target="_blank") Core Docs
    h2 Ecosystem
    ul
      li: a(href="http://router.vuejs.org/",target="_blank") vue-router
</template>

<script>
import Header from "./components/Header.vue"
import PageContent from "./components/PageContent.vue"

export default {
  name: 'root',
  components:{
    appHeader: Header,
    appPageContent: PageContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
#root
  font-family 'Open Sans', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

body
  padding 0
  margin 0

a
  text-decoration none

  




.buttons
  box-sizing border-box
  cursor pointer
  text-align center
  user-select none
  -moz-user-select none
  -webkit-user-select none
  -ms-user-select none
  font-weight 500
  display inline-block
  padding 0 20px
  border-radius 2px
.buttons-small
  width 100%
  height 40px
  font-size 16px
  line-height 39px
.buttons-teal
  background #00b4cd
  color #fff
  border 1px solid #fff









h1, h2
  font-weight normal


a
  color #42b983

</style>
