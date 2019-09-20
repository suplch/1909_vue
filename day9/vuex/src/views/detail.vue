<template>
	<div v-if="datainfo">
		<img :src="datainfo.poster" class="poster"/>

		<h2>{{datainfo.name}}</h2>
		<p>{{datainfo.synopsis}}</p>


		<h2>演职人员</h2>
		<swiper class="actors" perview="3" myclass="actors">
			<div class="swiper-slide"  v-for="data in datainfo.actors">
				<img :src="data.avatarAddress"/>
				<p>{{data.name}}</p>
			</div>
		</swiper>

		<h2>剧照</h2>
		<swiper class="photos" perview="2" myclass="photos">
			<div class="swiper-slide"  v-for="data in datainfo.photos">
				<img :src="data"/>
				
			</div>
		</swiper>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	import swiper from './detail/swiper'
	export default {

		data () {
			return {
				datainfo: null
			}
		},


		mounted(){
			//隐藏tabbar
			// this.$store.state.isTabbarShow  =false; //万一出错 ，无法调试
 
			this.$store.commit("MaizuoTabbarMutation",false)


			// $route 是当前路由对象
			console.log(this.$route.params.kerwinid,"利用这个id 获取新的数据");
			 // console.log(this.$route.query.id,"利用这个id 获取新的数据");
		
			axios({
				url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.kerwinid}&k=3431057`,
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.info'

				}
			}).then(res=>{
				console.log(res.data);
				this.datainfo = res.data.data.film
			})

			// 获取tabbar 的节点， display:none;
		},

		destroyed(){
			//显示tabbar
			// this.$store.state.isTabbarShow  = true;
			this.$store.commit("MaizuoTabbarMutation",true)
		},

		components:{
			swiper
		}
	}
</script>

<style lang="scss" scoped>
	.poster{
		width: 100%;
	}

</style>