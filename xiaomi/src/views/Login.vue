<template>
    <div class="login">
        Login
        <div>
            手机号: <input ref="phone" type="text"/>
        </div>
        <div>验证码: <input ref="code" type="text"/><button @click="sendCode">发送验证码</button></div>
        <div><button @click="login">登录</button></div>


    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Login",
        methods: {
            sendCode() {
                axios.post('/user/sendVerifyCode', {
                    phone: this.$refs.phone.value
                }).then((result) => {
                    alert('已经发送');
                }).catch(console.error)
            },
            login() {
                axios.post('/user/loginByCode', {
                    phone: this.$refs.phone.value,
                    code: this.$refs.code.value,
                }).then((result) => {
                    console.log(result.data);
                    this.$router.back();
                }).catch(console.error)
            }
        }
    }
</script>

<style scoped>
.login {
    font-size: 0.5rem;
}
    .login * {
        font-size: 0.3rem;
    }
    button {
        background: grey;
        padding: 10px;
        color: white
    }

    input {
        border: 1px red solid;
    }

</style>
