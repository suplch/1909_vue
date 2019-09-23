<template>
    <div class="checkout">
        checkout
        <div class="address" @click="goAddress">
            <template v-if="current_address">
                {{ current_address.name }}, {{ current_address.phone }}
                <hr/>
                {{ current_address.address }}
            </template>
            <template v-else>
                添加地址
            </template>
        </div>
        <div class="paychannel">
            <ul>
                <li v-for="channel of pay_channels" @click="choiceChannel(channel)">
                    {{channel.text}}
                    <input  v-bind:checked="current_channnel === channel" type="checkbox" />
                </li>
            </ul>
        </div>
        <footer>
            <button @click="goPay">
                去付款
            </button>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios';
    import { cartItems } from '../cartItems';
    import { currentAddress } from '../address'
    export default {
        name: "Checkout",
        data() {

            let pay_channels = [
                {name: 'alipay', text: '支付宝'},
                {name: 'wxpay', text: '微信'},
                {name: 'amount', text: '余额'}
            ];

            return {
                current_address: currentAddress(),
                current_channnel: pay_channels[2],
                pay_channels
            }
        },
        methods: {
            goAddress() {
                this.$router.push({name: 'address'})
            },
            choiceChannel(channel) {
                this.current_channnel = channel;
            },
            goPay() {
                const orderObj = {
                    address: this.current_address,
                    goods_list: cartItems
                };
                axios.post('/order/create', orderObj).then((result) => {
                    console.log(result.data);
                    let order_id = result.data.order_id;

                    axios.post('/order/pay', {
                        order_id
                    })


                }).catch(console.error);


            }
        }
    }
</script>

<style scoped>
    .checkout {
        background: lightgrey;
        height: 100%;
    }
    .address {
        height: 1rem;
        background: white;
        box-shadow: 0px 0px 5px lightgrey;
        text-align: center;
    }

    .paychannel{
        background: white;
        margin: 0.2rem;

    }

    ul {
        list-style: none;
    }

    ul li {
        height: 1rem;
        border-bottom: solid 1px lightgrey;
        line-height: 1rem;
    }

    ul li input {
        float: right;
        font-size: 0.3rem;
        width: 50px;
        height: 50px;
    }

    footer {
        box-shadow: 0px 0px 5px lightgrey;
        position: absolute;
        background: white;
        width: 100%;
        height: 1rem;
        bottom: 0;
    }
    footer button {
        float: right;
        background: orangered;
        font-size: 0.5rem;
        padding: 0.1rem;
    }
</style>
