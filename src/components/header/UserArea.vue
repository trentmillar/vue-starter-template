<template lang="pug">
  .userAreaContainer
    ul.userArea
      div(v-if="user")
        li.userItem
          div(todo-user-messages-component) Messages
        li.userItem
          div(todo-user-notifications-component) Notifications
        li.userDropdown  
          ul.userDropdown
            li.userName
              a(href="/users/trent-m") Trent M
            li.userDropdownCaret
              .downCaret 
      div(v-else)
        li.userLogin
          log-in
        li.spacer /
        li.userSignup Sign Up
        
</template>

<script>
  import LogIn from "../auth/LogIn.vue"

  export default{
    props: ['user'],
    components: {
      LogIn
    }
  }
</script>

<style lang="stylus">
  .userAreaContainer
    margin-top 6px 
    ul.userArea
      list-style-type none
      padding 0
      position relative
      li
        display inline-block
        float left
        cursor pointer
      li.userLogin
        text-transform uppercase
        color #fff
      li.spacer
        color #fff
        margin 0 4px
        cursor default
      li.userSignup 
        text-transform uppercase
        color #fff
        font-weight 700
      li.userItem
        margin-right 48px
      li.userDropdown
        display inline-block
        cursor pointer
        list-style-type none
        padding 0 
        li
          display inline
          float left
        li.userName
          cursor pointer
          max-width 100px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          a
            text-decoration none
            color inherit
        li.userDropdownCaret
          height 20px
          .downCaret
            width 0
            height 0
            border-left 5px solid transparent
            border-right 5px solid transparent
            border-top 5px solid #fff
            margin-top 5px
            margin-left 8px
</style>