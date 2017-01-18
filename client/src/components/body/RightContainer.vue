<template lang="pug">
  div(todo-results-component).resultsContent
    div(todo-breadcrumb-component).breadcrumbs
      product-list
</template>

<script>
  import ProductList from "../content/ProductList.vue"

  export default {
    components: {
      ProductList
    }
    
  }
</script>

<style lang="stylus">
  .resultsContent
    width 928px
    float left
    .breadcrumbs
      font-size 16px
      font-weight 400
      color #4c4c4c
      margin-top 20px
      margin-bottom 20px
</style>