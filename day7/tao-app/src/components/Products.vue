<template>
    <div style="border: solid 5px green">
        产品列表
        <ul>
            <li v-for="product of products">
                {{product.name}}, {{product.price | currency}}
                <img :src="product.pic" />
                <router-link
                    :to="{name: 'detail', params: {pid: product.id, type: 'dzcp'}, query: {name: 'zhang', age: 18}}">
                    详情
                </router-link>
            </li>
        </ul>
        <div v-if="loading">
            正在加载中...
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Products",
        data() {
            return {
                loading: false,
                products: []
            }
        },
        mounted() {
            if (sessionStorage.getItem('products')) {
                this.products = JSON.parse(sessionStorage.getItem('products'));
                this.loading = false;
            } else {
                this.loading = true;
                axios.get('/product/list').then((result) => {
                    this.products = result.data;
                    sessionStorage.setItem('products', JSON.stringify(result.data));
                    this.loading = false;
                }).catch((err) => {
                    console.error(err);
                    this.loading = false;
                });
            }
        },
        filters: {
            currency: function (value) {
                return `¥${value}`;
            }
        }
    }
</script>

<style scoped>

</style>
