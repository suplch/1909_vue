<template>
	<div>
		<swiper ref="swiper" v-if="datalist.length">
			<div class="swiper-slide" v-for="data in datalist">
			           <img :src="data.imgUrl" />
			</div>
		</swiper>

		<filmheader :class="isFixed?'fixed':''"></filmheader>
		<!-- 二级路由容器 -->
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import filmheader from './film/filmheader'
	import swiper from './film/swiper'
	import axios from 'axios'
	export default {
		data () {
			return {
				datalist : [],
				isFixed : false
			}
		},

		mounted(){
		  axios({
		    url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=97815",
		    headers:{
		      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
		      'X-Host': 'mall.cfg.common-banner'
		    }
		  }).then(res=>{
		    console.log(res.data);
		    this.datalist= res.data.data
		  }) 

		  window.onscroll =this.handleScroll;// 绑定滚动事件
		},

		destroyed(){
		  window.onscroll = null; //清除事件绑定
		},

		methods:{
			handleScroll(){
				// console.log(document.documentElement.scrollTop || document.body.scrollTop,this.$refs.swiper.$el.offsetHeight);
				if( (document.documentElement.scrollTop || document.body.scrollTop) >= this.$refs.swiper.$el.offsetHeight){
					// console.log("吸顶了")
					this.isFixed = true;
				}else{
					// console.log("不吸顶")
					this.isFixed = false;
				}
			}
		},



		components:{
			filmheader,
			swiper
		}
	}
</script>

<style scoped lang="scss">
	
	.fixed{
		position: fixed;
		top:0px;
		left:0px;
		height: 40px;
		width: 100%;
		background: white;
		color:black;
	}
</style>