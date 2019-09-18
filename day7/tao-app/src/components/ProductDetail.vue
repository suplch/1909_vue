<template>
    <div style="border: solid 5px yellowgreen">
        产品详情
        {{ $route.params }}
        <hr/>
        {{ $route.query}}
        <div v-if="detail">
            产品名称: {{ detail.name }}<br/>
            产品图片: <img :src="detail.pic"/><br/>
            产品价格: {{ detail.price }}<br/>
            产品详情: {{ detail.desc}}
        </div>
        <div v-if="loading">
            加载中...
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ProductDetail",
        data() {
            return {
                loading: false,
                detail: undefined
            }
        },
        mounted() {
            console.log(this.$route);
            if (sessionStorage.getItem('detail_' + this.$route.params.pid)) {
                this.detail = JSON.parse(sessionStorage.getItem('detail_' + this.$route.params.pid));
                this.loading = false;
            } else {
                this.loading = true;
                axios.get('/product/detail?pid=' + this.$route.params.pid).then((result) => {
                    if (result.data.status === 10000) {
                        this.detail = result.data.product_detail;
                        sessionStorage.setItem('detail_' + this.$route.params.pid, JSON.stringify(result.data));
                    } else {
                        alert(result.data.msg + ' : ' + result.data.status);
                    }
                    this.loading = false;
                }).catch((err) => {

                    this.loading = false;
                });
            }


        }
    }
</script>

<style scoped>

</style>
