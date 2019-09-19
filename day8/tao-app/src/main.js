
import Vue from 'vue'


import AppShip from './AppShop';

// import store from './store';

import store from './store_modules';

Vue.config.productionTip = false

new Vue({
  store,  // 将 store 对象 注入到 vue 环境中
  render: h => h(AppShip),
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
