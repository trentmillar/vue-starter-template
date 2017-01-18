<template lang="pug">
  .searchContainer
    .searchIcon
      img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAiNJREFUOBGdlD1oU1EUx/tugo3IM1ZQMygOEsFCSF+SqYJaKgh261DdxE3cRXB0sH4s9WN1sJu66SJYxH455SUkaSSDIjRdGpDawZDPF38nfbfclMRCL5z8//ecc//nvPsRa8gYpVLJrlardz3Pm7Ysa7TT6QwT3oAvBIPBF/F4fM1I76GWnmUymcssfIed9H2b4BYi5/Ep0AOfJZPJB8L1Oo1KCCKX6OKzL/Ka6qdTqVQEu4DPVkrdArdIve+67lO92EQrl8sdaTabP3BGqHSTim/NBM0LhcKpRqOxzPwceROJRGJJxwQVInfACDY/SEQSY7HYJp3dFk73c4LmkG+f9h0PzUA/7jjOKv4vrBkrFovHzRzZo1Fsm/34aQYGcfbKxaxarTZu5iicISr8MZ378G0/3jLz5NM2EDubz+dHzMB/uCMx1q2bOdLRgjhardYNM9CPc01O4J9EpGLbds9WcBDqJQEOwnvCEZ/pJ6B9FH0Fl02ejUajde0XVNyH7+Bj7Gi9Xl/hwl2TgDmkk3Q6/R6hGYo2QqHQvBkX3n0iJCgEHpF0Tzj4DXTB3+TEsSvMR0QEPMT8KzbFSVfB7th9azLLZrMX+cTnUEcEuxk7P/LuZgOBwBvi0tlVRBd5SlM85L+S0iO0s6YreAw+3m635YjXw+HwL70n5XL5cKVS+bBXrK+QFhyEe8SW6Oz6gYSkgC/2kc7kOnw6sJAhJv8Wc/8Aq10BPgxeBY8AAAAASUVORK5CYII=")
    input(type="text", placeholder="Search Plantery").searchInput
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus">
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
</style>