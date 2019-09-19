import {INCREMENT, DECREMENT} from './constant'
import Vue from "vue";

// 导入状态管理对象
import Vuex from 'vuex';
// 告诉 vue 使用 状态管理模块
Vue.use(Vuex);

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
        },
        countA(state) {
            return state.count + 100;
        },
        countB(state, getters) {
            return getters.countA + 1000;
        },
        countAdd(state) {
            return function (num) {
                return state.count + num;
            }
        }
    },
    mutations: { // 定义突变 方法, 通过 突变方法来改变数据模型
        // 突变方法 有一个 参数 state 表示 全局数据模型对象
        [INCREMENT](state, payload) {
            state.count = state.count + payload;
        },
        [DECREMENT](state, payload) {
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
    },
    actions: {
        [INCREMENT](context, payload) {
            const {commit, state, getters} = context;

            setTimeout(function () {
                commit(INCREMENT, payload)
            }, 1000);


        },
        [DECREMENT](context, payload) {
            const {commit, state, getters} = context;
            commit(DECREMENT, payload)
        }
    }
});

export default store;
