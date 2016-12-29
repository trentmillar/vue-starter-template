<template lang="pug">
  doctype html
  #root
    div(todo-page-component)
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
                    img(src="./assets/logo.png", alt="Plantsery")
              li
                .searchContainer
                  .searchIcon
                    img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAiNJREFUOBGdlD1oU1EUx/tugo3IM1ZQMygOEsFCSF+SqYJaKgh261DdxE3cRXB0sH4s9WN1sJu66SJYxH455SUkaSSDIjRdGpDawZDPF38nfbfclMRCL5z8//ecc//nvPsRa8gYpVLJrlardz3Pm7Ysa7TT6QwT3oAvBIPBF/F4fM1I76GWnmUymcssfIed9H2b4BYi5/Ep0AOfJZPJB8L1Oo1KCCKX6OKzL/Ka6qdTqVQEu4DPVkrdArdIve+67lO92EQrl8sdaTabP3BGqHSTim/NBM0LhcKpRqOxzPwceROJRGJJxwQVInfACDY/SEQSY7HYJp3dFk73c4LmkG+f9h0PzUA/7jjOKv4vrBkrFovHzRzZo1Fsm/34aQYGcfbKxaxarTZu5iicISr8MZ378G0/3jLz5NM2EDubz+dHzMB/uCMx1q2bOdLRgjhardYNM9CPc01O4J9EpGLbds9WcBDqJQEOwnvCEZ/pJ6B9FH0Fl02ejUajde0XVNyH7+Bj7Gi9Xl/hwl2TgDmkk3Q6/R6hGYo2QqHQvBkX3n0iJCgEHpF0Tzj4DXTB3+TEsSvMR0QEPMT8KzbFSVfB7th9azLLZrMX+cTnUEcEuxk7P/LuZgOBwBvi0tlVRBd5SlM85L+S0iO0s6YreAw+3m635YjXw+HwL70n5XL5cKVS+bBXrK+QFhyEe8SW6Oz6gYSkgC/2kc7kOnw6sJAhJv8Wc/8Aq10BPgxeBY8AAAAASUVORK5CYII=")
                  input(type="text", placeholder="Search Plantery").searchInput
              li.rightSide.sellContainer
                .buttons.buttons-small.buttons-teal Sell on Plantsery
    div(todo-page-component).pageContent
      div(todo-left-component).leftContent
        .categoriesContainer
          .title Categories
          ul.categories
            a(href="/this") This
            a(href="/that") That
            a(href="/the") The
            a(href="/other") Other

      div(todo-results-component).resultsContent
        div(todo-breadcrumb-component).breadcrumbs
        div(todo-productlist-component).productList
          ul.products
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago
            a(href="/product/123456789").productItem
              .productDisplay
                img(src="https://plaza.akamaized.net/133d/AajEnqKo_240.jpg").productImage
                .productNewBadge New
              .productDescription
                .productItemTitle Spiritual Intuitive Crap
                .productItemPrice $60
                .productLocation 
                  img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
                  span ~25 km
                .productTimestamp 11 hours ago




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
export default {
  name: 'root',
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

.pageContent
  padding-top 92px
  width 1178px
  margin auto
  .leftContent
    width 250px
    float left
    height 100%
    box-sizing border-box
    padding-right 0
    .categoriesContainer
      width 190px
      border-radius 2px
      border 1px solid #ccc
      margin-top 79px
      padding-bottom 15px
      .title
        margin-top 20px
        margin-bottom 20px
        margin-left 20px
        font-size 14px
        font-weight 600
        font-style normal
        font-stretch normal
        color #b2b2b2
        text-transform uppercase
      ul.categories
        list-style-type none
        margin 0
        padding 0
        width 150px
        margin-left 20px
        a
          display block
          text-decoration none
          cursor pointer
          font-size 15px
          font-weight 400
          font-style normal
          font-stretch normal
          line-height 1.8
          color #4c4c4c
  .resultsContent
    width 928px
    float left
    .breadcrumbs
      font-size 16px
      font-weight 400
      color #4c4c4c
      margin-top 20px
      margin-bottom 20px
    .productList
      margin 0
      padding 0
      ul.products
        padding 0
        margin-right -10px
        a.productItem
          display inline-block
          box-sizing border-box
          width 222px
          height 282px
          margin-right 12px
          margin-bottom 10px
          border 1px solid #d9d9d9
          border-radius 6px
          text-decoration none !important
          cursor: pointer
          -webkit-transition all .3s ease-in-out
          -moz-transition all .3s ease-in-out
          -ms-transition all .3s ease-in-out
          -o-transition all .3s ease-in-out
          .productDisplay
            box-sizing border-box
            position relative
            width 222px
            height 222px
            img.productImage
              box-sizing border-box
              border-top-left-radius 6px
              border-top-right-radius 6px
              width 220px
              height 222px
              object-fit cover
            .productNewBadge
              position absolute
              top 12px
              right 12px
              background-color #31982a
              text-transform lowercase
              font-size 10.7px
              font-style normal
              font-stretch normal
              color #fff
              padding 2px 6px
          .productDescription
            position relative
            width 220px
            height 54px
            background-color #fff
            .productItemTitle
              position absolute
              top 6px
              left 8px
              font-weight 400
              color #4c4c4c
              font-size 16px
              width 140px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .productItemPrice
              position absolute
              top 6px
              right 6px
              font-weight 400
              color #4c4c4c
              font-size 16px
              text-align right
              width 73px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .productLocation
              position absolute
              bottom 6px
              left 8px
              font-weight 400
              color #bababa
              font-size 14px
              img
                width 10px
            .productTimestamp
              position absolute
              bottom 6px
              right 6px
              font-weight 400
              color #23911c
              font-size 14px




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








h1, h2
  font-weight normal


a
  color #42b983

</style>
