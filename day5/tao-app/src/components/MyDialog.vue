<template>
    <div class="dialog">
        <button @click="getProduct">获取产品列表</button>
        {{ message }}
        <input v-model="message"/>
        <Timer></Timer>
        <ul>
            <li v-for="product of product_list">
                {{ product.name }}, 价格: {{ product.price }}
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    import Timer from './Timer.vue';
    export default {
        name: "MyDialog",
        data() {
            return {
                message: '这时我的第一个vue组件',
                product_list: []
            }
        },
        methods: {
            getProduct() {
                axios.get('/Product/list').then((result) => {
                    console.log(result.data);
                    this.product_list = result.data.product_list;
                }).catch((err) => {
                    console.error(err);
                });
            }
        },
        components: {
            Timer
        }
    }
</script>

<style scoped>
    .dialog {
        border: solid 5px red;
    }
</style>
