<template>
    <div style="border: solid 5px blue">
        电话: 1223455
        地址: 深圳 {{ $route.query }}
        <router-link :to="{name: 'map'}">打开地图</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
