<template>
	<div class="cinema">
		<ul>
			<li v-for="data in datalist">
				{{data}}
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import BScroll from 'better-scroll'; //参考 iscroll
	export default {
		data () {
			return {
				datalist :["111","222","333","4444","555","666"]
			}
		},

		mounted(){
			var myscroll = new BScroll('.cinema',{
				//配置下拉刷新
				 pullDownRefresh: {
					threshold: 50,
					stop: 20
				 },

				scrollbar: {
					fade: true,
					interactive: false // 1.8.0 新增
				},
				////配置上拉加载
				pullUpLoad: {
				 threshold: 50
				}

			})


			myscroll.on("pullingDown",()=>{
				console.log("下拉刷新了...")

				setTimeout(() => {
				  this.datalist.unshift("新的数据-下拉刷新")
				  myscroll.finishPullDown();// 结束了
				}, 2000)
			})

			myscroll.on("pullingUp",()=>{
				console.log("到底了...")

				setTimeout(() => {
				  this.datalist.push("新的数据-上拉加载")
				  myscroll.finishPullUp();// 结束了
				}, 2000)
			})
		}
	}
</script>
<style lang="scss" scoped>
	
	.cinema{
		overflow:hidden;
		height: 300px;
		position: relative;
		li{
			height: 100px;
		}
	}
</style>