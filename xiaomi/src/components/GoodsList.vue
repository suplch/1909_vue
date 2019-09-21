<template>
    <div class="goods" :style="{backgroundColor: 'red'}">
        <ul>
            <li :key="goods.id" v-for="goods of goods_list">
                {{goods.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "GoodsList",

        data() {
            return {
                goods_list: []
            }
        },
        mounted() {
            this.loadGoods()
        },

        methods: {
            loadGoods() {
                axios.get('/product/list?typeid=111').then((result) => {
                    this.goods_list = result.data;
                }).catch((err) => {

                })
            },
        }
    }
</script>

<style scoped>
    .goods {
        position: absolute;
        top: 0.74rem;
        width: 100%;
        background: lightskyblue;

    }
    ul li {
        height: 0.5rem;
        margin: 0.1rem;
    }
</style>
