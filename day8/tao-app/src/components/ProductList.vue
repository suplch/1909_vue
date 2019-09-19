<template>
    <div style="border: solid 5px red">
        商品列表
        <ul>
            <li v-for="product of products">
                <div v-if="product === currentProduct">
                    商品名称: <input ref="p_name" :value="product.name" type="text" />
                    商品价格: <input ref="p_price" :value="product.price" type="text" />
                    商品图片: <input ref="p_pic" :value="product.pic" type="text" />
                </div>
                <div v-else>
                    {{product.name}}, {{ product.price }}, {{ product.pic }}
                </div>
                <button @click="del(product)">删除</button>
                <button @click="edit(product)">编辑</button>
                <button v-on:click="cancel" v-if="product === currentProduct">取消</button>
                <button v-on:click="confirmProduct(product)" v-if="product === currentProduct">
                    确认
                </button>
            </li>
        </ul>
        合计 {{ total_price }}
        <hr/>
        当前编辑 {{ currentProduct }}
    </div>
</template>
<script>
    export default {
        name: "ProductList",
        methods: {
            del(product) {
                this.$store.commit('delProduct', product);
            },
            edit(product) {
                this.$store.commit('editProduct', product);
            },
            cancel() {
                this.$store.commit('editProduct', undefined);
            },
            confirmProduct(product) {
                let newProduct = {
                    name: this.$refs.p_name[0].value,
                    price: Number(this.$refs.p_price[0].value),
                    pic: this.$refs.p_pic[0].value
                };
                this.$store.commit('modifyProduct', {
                    oldProduct: product,
                    newProduct: newProduct
                })
            }
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            total_price() {
                return this.$store.getters.total_price
            },
            currentProduct() {
                return this.$store.state.currentProduct;
            }
        }
    }
</script>

<style scoped>

</style>
