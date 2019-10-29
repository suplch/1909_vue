<template>
    <div>
        {{detail}}


        <div class="floatblock">
            <div>购物车</div>
            <button @click="add2Cart">立即抢购</button>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import { add2Cart } from '../cartItems';
    export default {
        name: "detail",
        data() {
            return {
                detail: ''
            }
        },
        mounted() {
            this.detail = ''
            console.log(this.$route);
            this.$eventBus.$emit('showHideNav', false);
            axios.get('/product/detail?pid=' + this.$route.params.pid).then((result) => {
                this.detail = result.data;
            }).catch((err) => {

            });
        },
        methods: {
            add2Cart() {
                add2Cart(this.detail);
                this.$router.push({name: 'cart'})
            }
        }
    }
    //....
    //....


    // let f1 = comp.methods.add2Cart;
    //
    // f1.call(comp)

</script>

<style scoped>
    .floatblock {

        position: fixed;
        bottom: 0.5rem;
        left: 0.2rem;
        right: 0.2rem;
        height: 1rem;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 10px gray;
    }

    .floatblock button {
        float: right;
        font-size: 0.3rem;
        background: orange;
        padding: 0.1rem;
    }
</style>
