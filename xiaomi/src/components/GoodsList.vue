<template>
    <div class="goods" :style="{backgroundColor: 'red'}">
        <ul>
            <li @click="gotoDetail(goods)" :key="goods.id" v-for="goods of goods_list">
                {{goods.name}}, {{ goods.desc }}
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
            gotoDetail(goods){
                this.$router.push({name: 'detail', params: {pid: goods.id}})
            }
        }
    }
</script>

<style scoped>
    .goods {
        position: absolute;
        top: 0.74rem;
        bottom: 0.5rem;
        width: 100%;
        background: lightskyblue;

    }
    ul li {
        height: 1.5rem;
        background: orange;
        margin: 0.1rem;
    }
</style>
