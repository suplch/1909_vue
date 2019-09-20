<template>
	<nav>
		<!-- <ul>
			<li><a href="#/film">电影</a></li>
			<li><a href="#/cinema">影院</a></li>
			<li><a href="#/center">我的</a></li>
		</ul> -->
		<ul>
			<!-- 声明式导航(<a href=""></a>) VS  编程式导航 （location.href）-->
			<router-link to="/film" tag="li" activeClass="active">
				<i class="iconfont icon-all"></i>电影</router-link>
			<router-link to="/cinema" tag="li" activeClass="active">
				<i class="iconfont icon-all"></i>影院</router-link>
			<router-link to="/center" tag="li" activeClass="active">
				<i class="iconfont icon-all"></i>我的</router-link>
		</ul>
	</nav>
</template>

<style src="../assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
	nav{
		position: fixed;
		width: 100%;
		height: 50px;
		left:0px;
		bottom: 0px;
		background: white;
		color:black;
		line-height: 50px;
		z-index:10;
		ul{
			display: flex;
			li{
				flex:1;
				text-align: center;
			}
		}
	}
		
	.active{
		color: red;
	}
</style>

