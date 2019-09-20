<template>
	<div class="swiper-container kerwin">

		<!-- {{myclass}} -->
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
		props:["perview","myclass"],

		mounted(){
		  console.log("数据插入插槽了")
		  new Swiper ('.'+this.myclass,{
		     // direction: 'vertical', 
		    slidesPerView: this.perview, //根据需求动态展示多个slide
		    spaceBetween: 30,
		    freeMode: true
		  })
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