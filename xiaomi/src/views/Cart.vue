<template>
    <div class="cart">
        购物车
        <ul v-if="cartItems && cartItems.length > 0">
            <li v-for="item of cartItems">
                {{item.name}}, {{item.price}},
                数量 <button @click="inc(item, 1)">+</button>{{item.count}}<button @click="inc(item, -1)">-</button>
                <button @click="del(item.id)">删除</button>
            </li>
        </ul>
        <div v-else>
            购物车还是空的 , 去逛逛
        </div>



        <footer>
            <div style="float: left">
                合计 : {{ total_price }}
            </div>

            <button @click="checkout">去结算</button>
        </footer>
    </div>
</template>

<script>
    import { cartItems, delCart } from '../cartItems';
    export default {
        name: "Cart",
        data() {
            return {
                cartItems: cartItems
            }
        },
        mounted() {
            this.$eventBus.$emit('showHideNav', false);
        },
        methods: {
            inc(item, n) {
                item.count += n;
            },
            del(id) {
                delCart(id);
            },
            checkout() {
                this.$router.push({name: 'checkout'});
            }
        },
        computed: {
            total_price() {
                return this.cartItems.reduce((pre, item) => {
                    return pre + (item.price * item.count);
                }, 0);
            }
        }
    }
</script>

<style scoped>
    .cart {
        height: 100%;
    }
    ul li {
        font-size: 0.5rem;
    }

    ul li button {
        font-size: 0.5rem;
        background: grey;
        padding: 0.2rem;
    }

    footer {
        position: absolute;
        height: 1rem;
        bottom: 0;
        width: 100%;
    }

    footer button {
        background: orangered;
        color: white;
        font-size: 0.5rem;
        float: right;
    }
</style>
