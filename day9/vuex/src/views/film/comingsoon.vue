<template>
	<div>
			<ul>
				<li v-for="data in $store.state.comingsoonlist" @click="handleChangePage(data.filmId)" :key="data.filmId">
					<img :src="data.poster"/>
					<h3>{{data.name}}</h3>
				</li>
			</ul>
		</div>
</template>


<script type="text/javascript">
	import axios from 'axios' //npm install axios
	export default {
		data(){
			return {
				
			}
		},

		mounted(){
			console.log("ajax 请求nowplaying，每次切换路由都会导致页面组件被卸载")

			if(this.$store.state.comingsoonlist.length===0){
				//ajax
				this.$store.dispatch("GetComingSoonAction");
			}else{
				console.log("不需要重复请求数据")
			}

		},

		methods:{
			handleChangePage (id) {
				//编程式导航
				// console.log(id);
				// this.$router === route.js定义的路由对象，  是完整路由对象
				
				//动态路由 跳转 -1

				this.$router.push(`/detail/${id}`) //跳转页面  // /detail/4588
			
				//动态路由 跳转 -2
				//this.$router.push({name:"detail",params:{kerwinid:id}});

				//get传参 跳转方式
				// this.$router.push(`/detail?id=${id}`)
			}
		},

		destroyed(){
		}


	}

</script>

<style scoped lang="scss">
	// div{
	// 	margin-bottom: 50px;
	// }
	
	ul{
		li{
			overflow:hidden;
			padding:10px;
			img{
				float:left;
				width: 100px;
			}
		}
	}
</style>