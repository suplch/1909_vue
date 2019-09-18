<template>
    <div style="border: solid 5px red">
        本站是一个 电商购物
        <router-link v-bind:to="{name: 'contact'}">联系方式</router-link>
        <router-link v-bind:to="{name: 'copyright'}"> copyright </router-link>

        <router-view></router-view>
        <router-view name="address"></router-view>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
