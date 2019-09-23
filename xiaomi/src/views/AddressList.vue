<template>
    <div class="address">
        <header>
            收货地址
        </header>
        <ul>
            <li @click="choiceAddress(address)" v-for="address of address_list">
                {{address.name}}, {{address.phone}}, {{address.address}}
            </li>
        </ul>
        <footer @click="newAddress">
            新建地址
        </footer>
    </div>
</template>

<script>
    import { address_list, choice_Address } from '../address';
    export default {
        name: "AddressList",
        data() {
            return {
                address_list: address_list
            }
        },
        methods: {
            newAddress() {
                this.$router.push({name: 'editaddress'})
            },
            choiceAddress(address){
                choice_Address(address)
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .address {
        height: 100%;
    }
    ul li {
        height: 1.5rem;
        box-shadow: 0px 0px 2px grey;
    }
    footer {
        position: absolute;

        bottom: 0;
        background: orangered;
        color: white;
        text-align: center;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
</style>
