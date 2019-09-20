import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

function saveCartToStorage(state) {
    localStorage.setItem('cartState', JSON.stringify(state))
}

function loadCartStateFromStorage() {
    let str = localStorage.getItem('cartState');
    if (str) {
        return JSON.parse(str);
    }
    return null;
}

const goodsModule = {
    namespaced: true,
    state: {
        goods_list: [
            {id: '111', name: '苹果', price: 30, pic: ''},
            {id: '222', name: '栗子', price: 50, pic: '🌰'},
            {id: '333', name: '西瓜', price: 100, pic: '🍉'},
        ]
    },
};

const shoppingCart = {
    namespaced: true,
    state: loadCartStateFromStorage() || {
        cartItems: []
    },
    getters: {
        total_price(state) {
            return state.cartItems.reduce((previous, item) => {
                return previous + (item.price * item.count);
            }, 0);
        }
    },
    mutations: {
        addToCart(state, goods) {
            let exist = false;
            state.cartItems.forEach((item) => {
                if (goods.id === item.id) {
                    item.count++;
                    exist = true;
                }
            });
            if (!exist) {
                state.cartItems.push({
                    ...goods,
                    count: 1
                })
            }
            saveCartToStorage(state);
        },
        delItem(state, pid) {
            state.cartItems = state.cartItems.filter((item) => {
                return pid !== item.id
            });
            saveCartToStorage(state);
        },
        updateCount(state, payload){
            payload.carItem.count += payload.num;
            saveCartToStorage(state);
        }
    },
    actions: {
        addToCart(context, goods) {
            console.log(goods);
            context.commit('addToCart', goods);
        },
        delItem(context, pid) {
            context.commit('delItem', pid)
        },
        updateCount(context, payload) {
            context.commit('updateCount', payload)
        }
    }
};

const store = new Vuex.Store({
    state: {},
    modules: {
        goods: goodsModule,
        cart: shoppingCart
    }
});

export default store;
