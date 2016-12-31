<template lang="pug">
  div(todo-left-component).leftContent
        .categoriesContainer
          .title Categories
          ul.categories
            a(href="/this") This
            a(href="/that") That
            a(href="/the") The
            a(href="/other") Other
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
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
</style>