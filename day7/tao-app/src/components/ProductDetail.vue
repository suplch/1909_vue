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
        <div>
            类似产品
            <router-link :to="{name: 'detail', params:{pid: '222'}}">福临门</router-link>
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
        methods: {
            getDetail() {
                console.log(this.$route);
                if (sessionStorage.getItem('detail_' + this.$route.params.pid)) {
                    this.detail = JSON.parse(sessionStorage.getItem('detail_'
                        + this.$route.params.pid)).product_detail;
                    this.loading = false;
                } else {
                    this.loading = true;
                    axios.get('/product/detail?pid=' + this.$route.params.pid).then((result) => {
                        if (result.data.status === 10000) {
                            this.detail = result.data.product_detail;
                            sessionStorage.setItem('detail_'
                                + this.$route.params.pid, JSON.stringify(result.data));
                        } else {
                            alert(result.data.msg + ' : ' + result.data.status);
                        }
                        this.loading = false;
                    }).catch((err) => {

                        this.loading = false;
                    });
                }
            }
        },
        mounted() {
            this.getDetail();
        },
        beforeRouteEnter(to, from ,next) {
            console.log(to);
            console.log(from);
            next(true);
        },
        beforeRouteUpdate(to, from ,next) {
            console.log(to);
            console.log(from);
            next(true);
            this.getDetail();
        },
        beforeRouteLeave(to, from ,next) {
            console.log(to);
            console.log(from);
            next(confirm('客官,真的要离开吗'));
        }
    }
</script>

<style scoped>

</style>
