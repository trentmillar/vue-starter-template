<template lang="pug">
  doctype html
  div(todo-header-component)
    .navbar
      nav.top
        ul.topLeftSide
          li.locationContainer
            .locationStringContainer
              .iconPin
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAAAXNSR0IArs4c6QAAAR5JREFUGBldUC1Pw1AU7XulX6KuChIcSf3EEFhcu2aQBtuwILY/MInmR+BJStiazm0OBAgyV4MjyDYgZtqkLefsIxmc5L1z7r3nvvveEwoQhqFeluW4bds+whOsDyHExDCMuziOKxFFkZnn+QsKHaz/eHcc50wWRXGLSgedn6qqnluWZZMZM8/6AUSP7VLKQZIkC2pgEQTBoK7rOXRPYjtkVtf1V/IOuN/bVh/RtGRQVdXpNrkmjOtSwLwUnuddQT/wDhzJE9nQNM09DMe4XyjohvEJxOf/ARqnaZr2OU7Bi0ag730HDD+apjGvqNyyLFu5rvuF4y8YEzAN8Vr+n7IeR0H4vv8I4yUMM4zxN1l8z06Qbdu+AT2bpnm9n/8FExtebxp7VaMAAAAASUVORK5CYII=")
              .locationPrefix My Location
          li.userAreaContainer.rightSide
            div(todo-user-contatiner-component)
              ul.userArea
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
      nav.main
        ul.content
          li
            a(href="/")
              .logo
                img(src="../assets/logo.png", alt="Plantsery")
          li
            .searchContainer
              .searchIcon
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAiNJREFUOBGdlD1oU1EUx/tugo3IM1ZQMygOEsFCSF+SqYJaKgh261DdxE3cRXB0sH4s9WN1sJu66SJYxH455SUkaSSDIjRdGpDawZDPF38nfbfclMRCL5z8//ecc//nvPsRa8gYpVLJrlardz3Pm7Ysa7TT6QwT3oAvBIPBF/F4fM1I76GWnmUymcssfIed9H2b4BYi5/Ep0AOfJZPJB8L1Oo1KCCKX6OKzL/Ka6qdTqVQEu4DPVkrdArdIve+67lO92EQrl8sdaTabP3BGqHSTim/NBM0LhcKpRqOxzPwceROJRGJJxwQVInfACDY/SEQSY7HYJp3dFk73c4LmkG+f9h0PzUA/7jjOKv4vrBkrFovHzRzZo1Fsm/34aQYGcfbKxaxarTZu5iicISr8MZ378G0/3jLz5NM2EDubz+dHzMB/uCMx1q2bOdLRgjhardYNM9CPc01O4J9EpGLbds9WcBDqJQEOwnvCEZ/pJ6B9FH0Fl02ejUajde0XVNyH7+Bj7Gi9Xl/hwl2TgDmkk3Q6/R6hGYo2QqHQvBkX3n0iJCgEHpF0Tzj4DXTB3+TEsSvMR0QEPMT8KzbFSVfB7th9azLLZrMX+cTnUEcEuxk7P/LuZgOBwBvi0tlVRBd5SlM85L+S0iO0s6YreAw+3m635YjXw+HwL70n5XL5cKVS+bBXrK+QFhyEe8SW6Oz6gYSkgC/2kc7kOnw6sJAhJv8Wc/8Aq10BPgxeBY8AAAAASUVORK5CYII=")
              input(type="text", placeholder="Search Plantery").searchInput
          li.rightSide.sellContainer
            .buttons.buttons-small.buttons-teal Sell on Plantsery
</template>

<script>
	export default {

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
        .locationStringContainer
          cursor pointer
          color #fff
          div
            display inline-block
          .iconPin
            display inline-block
            img
              width 6px
              height 9px
              margin-top 10px
              margin-right 6px
          .locationPrefix
            margin-right 6px       
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
        .searchContainer
          display inline-block
          vertical-align top
          margin-top 10px
          .searchIcon
            background-color #fff
            display inline-block
            height 42px
            width 40px
            border-right none
            border-bottom-left-radius 100px
            border-top-left-radius 100px
            img
              width 18px
              height 18px
              margin-top 13px
              margin-left 22px
          .searchInput
            box-sizing border-box
            background-color #fff
            height 42px
            border none
            border-bottom-right-radius 100px
            border-top-right-radius 100px
            width 680px
            font-size 16px
            line-height 20px
            font-weight 400
            color #4c4c4c
            vertical-align top
            padding-left 8px
            outline none
      .sellContainer
        margin-top 11px

</style>