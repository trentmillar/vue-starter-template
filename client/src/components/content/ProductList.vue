<template lang="pug">
div(todo-productlist-component).productList
  ul.products
    product-item(v-for="product in products", :key="product.id", :product="product")
    
</template>

<script>
import Vue from "vue"
import ProductItem from "./ProductItem.vue"
import { eventBus } from "../../store/EventBus"

let isInitialRender = true

export default {
  components: {
    ProductItem
  },
  beforeMount () {
    eventBus.$on('productsUpdated', (products) => {
      this.products = products
    })
  },
  data() {
    const data = {
      loading: false,
      products: isInitialRender ? this.$store.state.products : []
    }
    isInitialRender = false;
    return data
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