import Vue from 'vue'
import App from './App.vue'
import Modal from "./components/shared/Modal.vue"

Vue.component("app-modal", Modal);

new Vue({
  el: '#app',
  /*render: h => h(App)*/
  ...App
})