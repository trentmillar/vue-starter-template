<template lang="pug">
a(:href="url").productItem
  .productDisplay
    img(:src="product.image").productImage
    .productNewBadge New
  .productDescription
    .productItemTitle {{ product.title }}
    .productItemPrice {{ price }}
    .productLocation 
      img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAcCAYAAABlL09dAAAB+klEQVR4AaWWNZsUQRCGG3d3d7d/QYJFFyEJToZnOCk/AE+QCCJCHPr7enfOr3F3d/cpnN3qnb6lnqdHWt6tKV0TkqtXr7YGMD8dB0hcAexbAI9JXCDtXufsHO99exMrX79+beYc5pG4CdivGeMByeXpmeYloc65biQSHRIepD1eW1vbU4UmSdKdRK1sLG/goihWZM9SUBKfSXuHxL10fCmh+Yl/zAJgcwD4DMDi6urqzr/2yicDWC3O1M44h0VGpK6urguJ18qvW5L9TUDy+fwo0jYo8Ps3b9o2RjRSoE9ramw/kyG5XG4cYN8Vn+cMAe9WHDHfRIpzWKuYcKch4QsmP5w7d65DLBjAYAUMkz68LJi8YhopiiOvi8b3CsBXywC/KwJLYBdMfiTZMZIp0TFU8ZETjQ8pXl0SCyaxUbHxfiNFRFl4nqb4wOyIcJPE2YpiC74vBtIzL58ZgiaJnUDivJ59bsgv41fpcLwCsOzvyiXZKLFL4n3gzNG/PsnOiahgT8REWftSVsVvsPe+JYkb+ub4QcJLoyhwhK34T7DYdmoodI6Ur609aMKeToYB9kUZ0DvSgTICnrMaadcvJCfHVqxt8XBs0Sm6SVpI543Q9ojsVRCZfwXOlIB6aWumHJEsI3FVgV4Jt65I8d52BbBdPC9DnmUu69w3m0vlJkXZ7/AAAAAASUVORK5CYII=")
      span ~25 km
    .productTimestamp {{since}}
</template>

<script>
  import moment from "moment"
  import numeral from "numeral"

  export default {
    props: ['product'],
    data() {
      return {
        url: "/product/" + this.product.id,
        since: moment(this.product.created).fromNow(),
        price: numeral(this.product.price).format("$0,0.00")
      }
    }
  }
</script>

<style lang="stylus">
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
</style>