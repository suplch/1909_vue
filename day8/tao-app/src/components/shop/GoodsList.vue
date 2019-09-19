<template>
    <div style="border: solid 5px green">
        商品列表
        <ul>
            <li :key="goods.id" v-for="goods of goods_list">
                {{goods.name}}, {{ goods.price}}, {{ goods.pic}}
                <button @click="addToCart(goods)">添加到购物车</button>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        methods: {
            addToCart(goods){
                this.$store.dispatch('cart/addToCart', goods)
            }
        },
        computed: {
            goods_list() {
                return this.$store.state.goods.goods_list;
            }
        }
    }
</script>

<style scoped>

</style>
