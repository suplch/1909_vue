import Vue from 'vue'
// 导入状态管理对象
import Vuex from 'vuex';
// 告诉 vue 使用 状态管理模块
Vue.use(Vuex);

import App from './App.vue'

Vue.config.productionTip = false

// 创建一个 全局 状态管理 store
const store = new Vuex.Store({
  state: { // 全局状态对象, 相当于 全局数据模型
    count: 0,
    products: [
        {id: '111', name: '苹果', price: 30, pic: ''},
        {id: '222', name: '栗子', price: 50, pic: '🌰'},
        {id: '333', name: '西瓜', price: 100, pic: '🍉'},
    ],
    currentProduct: undefined,
  },
  getters: { // 全局计算属性
    total_price(state) {
      let total = 0;
      for (let product of state.products) {
        total += product.price;
      }
      return total;
    }
  },
  mutations: { // 定义突变 方法, 通过 突变方法来改变数据模型
    // 突变方法 有一个 参数 state 表示 全局数据模型对象
    increment(state, payload) {
      state.count = state.count + payload;
    },
    decrement(state, payload) {
      state.count = state.count - payload;
    },

    addProduct(state, product) {
      state.products.push(product);
    },
    delProduct(state, product) {
      let position = state.products.indexOf(product);
      state.products.splice(position, 1);
    },
    editProduct(state, product) {
      state.currentProduct = product;
    },
    modifyProduct(state, payload) {
      payload.oldProduct.name = payload.newProduct.name;
      payload.oldProduct.price = payload.newProduct.price;
      payload.oldProduct.pic = payload.newProduct.pic;

      state.currentProduct = undefined;
    }
  }
});
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
