<template lang="pug">
  doctype html
  div(todo-header-component)
    .navbar
      nav.top
        ul.topLeftSide
          li.locationContainer
            location-area
          li.rightSide
            user-area(:user="user")
              
      nav.main
        ul.content
          li
            a(href="/")
              .logo
                img(src="../../assets/logo.png", alt="Plantsery")
          li
            search-area
          li.rightSide
            sell-area
</template>

<script>
  import UserArea from "./UserArea.vue"
  import LocationArea from "./LocationArea.vue"
  import SearchArea from "./SearchArea.vue"
  import SellArea from "./SellArea.vue"

	export default {
    props: ['user'],
    components: {
      UserArea,
      LocationArea,
      SearchArea,
      SellArea
    }
	}
</script>

<style lang="stylus">
  .navbar
    position fixed
    top 0
    width 100%
    z-index 10
    .rightSide
      float right !important 
    .top
      background #00aabd
      height 28px
      padding 0
      width 100%
      font-size 12px
      color #fff  
      ul.topLeftSide
        width 1178px
        margin auto
        list-style-type none
        padding 0
        li
          display inline
          float left
          position relative
        li.locationContainer
          margin-left 250px
    .main
      background #18b7cc
      height 64px
      padding 0
      width 100%
      ul.content
        width 1178px
        margin auto
        list-style-type none
        padding 0
        li
          display inline
          float left
          position relative
          .logo
            display inline-block
            cursor pointer
            width 250px
            img
              width 40px
              height 40px
              margin-top 14px

</style>