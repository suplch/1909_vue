<template>
	<div>
		<ul>
			<li v-for="data in datalist" @click="handleChangePage(data.filmId)" :key="data.filmId">
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
				datalist : []
			}
		},

		mounted(){
			console.log("ajax 请求nowplaying，每次切换路由都会导致页面组件被卸载")

			axios({
				url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3430987",
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then(res=>{
				console.log(res.data)
				this.datalist = res.data.data.films
			})
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