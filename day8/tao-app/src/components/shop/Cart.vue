<template>
    <div style="border: solid 5px blue">
        购物车
        <ul>
            <li v-for="item of cartItems">
                {{item.name}}, 价格:{{ item.price}}, {{ item.pic}},
                数量:
                <button @click="updateCount(item, -1)">-</button>
                {{ item.count }}
                <button @click="updateCount(item, 1)">+</button>
                <button @click="del(item.id)">删除</button>
            </li>
        </ul>
        合计: {{ total_price }}
    </div>
</template>

<script>
    export default {
        name: "Cart",
        methods: {
            decCount(item) {
                if (item.count > 1) {
                    item.count--
                }
            },
            del(pid) {
                this.$store.dispatch('cart/delItem', pid);
            },
            updateCount(carItem, num) {
                this.$store.dispatch('cart/updateCount', {
                    carItem,
                    num
                })
            }
        },
        computed: {
            cartItems() {
                return this.$store.state.cart.cartItems
            },
            total_price() {
                return this.$store.getters['cart/total_price']
            }
        }
    }
</script>

<style scoped>

</style>
