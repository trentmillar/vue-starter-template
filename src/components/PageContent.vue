<template lang="pug">
  div(todo-page-content-component).pageContent
    left-content
    right-content
</template>

<script>
import LeftContainer from "./LeftContainer.vue"
import RightContainer from "./RightContainer.vue"

export default {
  components: {
    LeftContent: LeftContainer,
    RightContent: RightContainer
  }
}
</script>

<style lang="stylus">
  .pageContent
    padding-top 92px
    width 1178px
    margin auto
</style>