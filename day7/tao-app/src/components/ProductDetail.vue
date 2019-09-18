<template>
    <div style="border: solid 5px yellowgreen">
        产品详情
        {{ $route.params }}
        <hr/>
        {{ $route.query}}
    </div>
</template>

<script>
    export default {
        name: "ProductDetail",
        mounted() {
            console.log(this.$route);
        }
    }
</script>

<style scoped>

</style>
