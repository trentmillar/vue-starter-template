<template lang="pug">
div(todo-productlist-component).productList
  ul.products
    product-item(v-for="product in products", :key="product.id", :product="product")
    
</template>

<script>
import ProductItem from "./ProductItem.vue"

export default {
  components: {
    ProductItem
  },
  computed: {
      products() {
        return this.$store.state.products;
      }
    },
}
</script>

<style lang="stylus">
.productList
  margin 0
  padding 0
  ul.products
    padding 0
    margin-right -10px
</style>