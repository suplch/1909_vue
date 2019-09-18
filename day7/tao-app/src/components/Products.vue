<template>
    <div style="border: solid 5px green">
        产品列表
        <ul>
            <li v-for="product of products">
                {{product.name}}, {{product.price}}, {{product.pic}}
                <router-link
                    :to="{name: 'detail', params: {pid: product.id, type: 'dzcp'}, query: {name: 'zhang', age: 18}}">
                    详情
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Products",
        data() {
            return {
                products: [
                    {id: '111', name: '电脑', price: 123, pic: '💻'},
                    {id: '222', name: '书包', price: 23, pic: '🎒'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
