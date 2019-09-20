<template>
		<ul>
			<!-- 声明式导航(<a href=""></a>) VS  编程式导航 （location.href）-->
			<router-link to="/film/nowplaying" tag="li" activeClass="active">
				正在热映</router-link>
			<router-link to="/film/comingsoon" tag="li" activeClass="active">
				即将上映</router-link>
		</ul>
</template>

<style lang="scss" scoped>
	ul{
		display: flex;
		li{
			flex:1;
			height: 40px;
			line-height: 40px;
			text-align: center;
		}
	}

	.active{
		color: red;
		border-bottom:3px solid red;
	}
</style>