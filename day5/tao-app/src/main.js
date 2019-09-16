import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vue = new Vue({
  render (createElement) {
    return createElement(App);
  }
});


setTimeout(function () {
  vue.$mount('#app')
}, 100)



