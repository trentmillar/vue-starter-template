<template>
  <!-- <script type="text/x-template" id="modal-template"> -->
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header-close" @click="$emit('close')">
                close
            </div>

            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
              
            </div>

            <hr>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  <!-- </script> -->
</template>

<script>
  export default {
    name: 'modal',
    data() {
      return {
        showLogInModal: false
      }
    },
    template: '#modal-template'
  };
</script>

<style lang="stylus">
.modal-mask
  cursor default
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .5)
  display table
  transition opacity .3s ease

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-container
  width 300px
  margin 0px auto
  padding 20px 30px
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  font-family Helvetica, Arial, sans-serif

.modal-header
  text-align center
  margin auto
  padding 10px
  color #000

.modal-header h2
  margin-top 0
  margin auto
  color #42b983

.modal-header-close
  position absolute
  right 15px
  top 15px
  cursor pointer
  text-transform uppercase
  color #fff

.modal-body
  margin 20px 0

.modal-default-button
  float right

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform scale(1.1)
  transform scale(1.1)
</style>