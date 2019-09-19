
import Vue from 'vue'

import App from './App.vue'

import store from './store';

Vue.config.productionTip = false

new Vue({
  store,  // 将 store 对象 注入到 vue 环境中
  render: h => h(App),
}).$mount('#app');

// commit 提交 一个 mutation
// store.commit('increment');
// console.log(store.state.count);
//
// store.commit('increment');
// console.log(store.state.count);
//
// store.commit('decrement');
// console.log(store.state.count);
//
// store.commit('decrement');
// console.log(store.state.count);
