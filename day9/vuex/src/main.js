import Vue from 'vue' // ES6 导入方式 // var Vue = require("vue") commonJS
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // this.$router
  store:store, // this.$store
  render: h => h(App) // render是一个回调 渲染app 组件
}).$mount('#app') // 把渲染完的组件挂载到 app节点


// var test = function(kerwin){
// 	return kerwin("App");
// }

// var test = (h)=>h("app")
