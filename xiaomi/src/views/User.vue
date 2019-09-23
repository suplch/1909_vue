<template>
    <div>
        个人中心
        <div v-if="isLogin">
            欢迎 ...
        </div>
        <div v-else>
            <button @click="toLogin">登录注册</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                isLogin: existCookie('token')
            }
        },
        mounted() {
            this.$eventBus.$emit('showHideNav', true);
        },
        methods: {
            toLogin() {
                this.$router.push({name: 'login'})
            }
        }
    }

    function existCookie(name) {
        let parts = document.cookie.split('; ');
        for (let part of parts) {
            if (name === part.split('=')[0]) {
                return true
            }
        }
        return false;
    }
</script>

<style scoped>

</style>
