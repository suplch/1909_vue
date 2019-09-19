<template>
    <div style="border: solid 5px green">
        <fieldset>
            <legend>添加商品</legend>
            <div>
                商品名称: <input ref="p_name" type="text"/>
            </div>
            <div>
                商品价格: <input ref="p_price" type="text"/>
            </div>
            <div>
                商品图片: <input ref="p_pic" type="text"/>
            </div>
            <button @click="addProduct">添加</button>
        </fieldset>
        当前商品 总价值 {{ total_price }}
    </div>

</template>

<script>
    export default {
        name: "AddProduct",
        methods: {
            addProduct() {

                this.$store.commit('addProduct', {
                    name: this.$refs.p_name.value,
                    price: Number(this.$refs.p_price.value),
                    pic: this.$refs.p_pic.value
                })
            }
        },
        computed: {
            total_price() {
                return this.$store.getters.total_price
            }
        }
    }
</script>

<style scoped>

</style>
