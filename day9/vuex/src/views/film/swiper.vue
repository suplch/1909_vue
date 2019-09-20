<template>
	<div class="swiper-container kerwin">
	           <div class="swiper-wrapper">
	               <slot></slot>
	           </div>
	           <!-- 如果需要分页器 -->
	           <div class="swiper-pagination"></div>
	           
	</div>
</template>

<script type="text/javascript">
	import Swiper from 'swiper' //swiper .js
	import 'swiper/dist/css/swiper.css'// swiper.css
	export default {

		mounted(){
			// 监听事件
			new Swiper ('.kerwin',{
			  pagination: {
			     el: '.swiper-pagination',
			   },
			   // direction: 'vertical', 
			  loop: true,
			  autoplay: {
			    delay: 2500,
			    disableOnInteraction: false,
			  }
			})
		},

		updated(){
		  // console.log("新的数据插入插槽了")
		  
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-wrapper{
		img {
			width: 100%;
		}
	}
</style>