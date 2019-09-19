<template>
    <div style="border: solid 5px red">
        <GoodsList></GoodsList>
        <hr/>
        <Cart></Cart>
    </div>
</template>

<script>
    import GoodsList from './components/shop/GoodsList';
    import Cart from './components/shop/Cart';
    export default {
        name: "AppShop",
        components: {
            GoodsList,
            Cart,
        }
    }
</script>

<style scoped>

</style>
