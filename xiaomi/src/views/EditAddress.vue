<template>
    <div class="editaddr">
        <div class="form">
            <div>
                收货人: <input ref="uname" />
            </div>
            <div>
                手机号码: <input ref="uphone" />
            </div>
            <div>
                详细地址: <input ref="uaddress" />
            </div>
            <div>
                设置为默认: <input type="checkbox" />
            </div>
        </div>
        <footer @click="saveAddress">
            保存地址
        </footer>
    </div>
</template>

<script>
    import { addAddress } from '../address';
    export default {
        name: "EditAddress",
        methods: {
            saveAddress() {
                const addressObj = {
                    name: this.$refs.uname.value,
                    phone: this.$refs.uphone.value,
                    address: this.$refs.uaddress.value
                };
                addAddress(addressObj);

                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .editaddr {
        height: 100%;
    }
    .form {

    }

    .form > div > input {
        width: 80%;
        height: 80%;
        user-select: none;
        font-size: 0.5rem;
    }

    .form > div {
        height: 1rem;
        border-bottom: solid 1px lightgrey;
        line-height: 1rem;
    }



    footer {
        position: absolute;
        background: orangered;
        color: white;
        text-align: center;
        width: 100%;
        bottom: 0;
        height: 1rem;
    }
</style>
