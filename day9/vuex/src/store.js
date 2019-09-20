import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	//所有的共享状态写在这里
  	isTabbarShow:true,

  	comingsoonlist:[]
  },
  mutations: {
  	//唯一能修改状态的位置， 
  	MaizuoTabbarMutation(state,payload){
  		console.log("MaizuoTabbarMutation",payload)
  		state.isTabbarShow = payload;
  	},

  	GetComingSoonMutation(state,payload){
  		state.comingsoonlist = payload;
  	}
  },
  actions: {
  	//专门做异步处理
  	GetComingSoonAction(store){
  		axios({
				url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5807598",
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then(res=>{
				console.log(res.data)
				store.commit("GetComingSoonMutation",res.data.data.films)
			})
  	}
  }
})


/*
  状态管理 ："全局的管理" store是存在内存中， 一刷新页面就丢了
 
	1. 非父子通信 

	2. 缓存后端数据 -  数据快照 ，提升用户体验。 内存
 */