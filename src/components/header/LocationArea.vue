<template lang="pug">
  .locationStringContainer
    .iconPin
      img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAAAXNSR0IArs4c6QAAAR5JREFUGBldUC1Pw1AU7XulX6KuChIcSf3EEFhcu2aQBtuwILY/MInmR+BJStiazm0OBAgyV4MjyDYgZtqkLefsIxmc5L1z7r3nvvveEwoQhqFeluW4bds+whOsDyHExDCMuziOKxFFkZnn+QsKHaz/eHcc50wWRXGLSgedn6qqnluWZZMZM8/6AUSP7VLKQZIkC2pgEQTBoK7rOXRPYjtkVtf1V/IOuN/bVh/RtGRQVdXpNrkmjOtSwLwUnuddQT/wDhzJE9nQNM09DMe4XyjohvEJxOf/ARqnaZr2OU7Bi0ag730HDD+apjGvqNyyLFu5rvuF4y8YEzAN8Vr+n7IeR0H4vv8I4yUMM4zxN1l8z06Qbdu+AT2bpnm9n/8FExtebxp7VaMAAAAASUVORK5CYII=")
    .locationPrefix My Location  
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus">
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
</style>