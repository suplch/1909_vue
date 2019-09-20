import Vue from 'vue'
import Router from 'vue-router' //已经下载
import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'
import Detail from '@/views/detail'
import Nowplaying from '@/views/film/nowplaying'
import Comingsoon from '@/views/film/comingsoon'
Vue.use(Router) //注册路由模块


const router = new Router({
  mode:"hash", // hash , history

  routes: [
   //一级路由
    {
      path: '/film',
      // name: 'home',
      component: Film,
 
       // 二级路由 嵌套路由
      children: [
        {
          path:"nowplaying",
          component:Nowplaying
        },
        {
          path:"comingsoon",
          component:Comingsoon
        },
        {
          path:"",
          redirect:'/film/nowplaying' //孩子的重定向
        }
      ]
    },

    // 一级路由， 路径 存在父子关系， 组件间没有父子关系
    // {
    //   path: '/film/comingsoon',
    //   component:Comingsoon
    // },

    {
      path: '/cinema',
      // name: 'home',
      component: Cinema
    },
    {
      path: '/center',
      // name: 'home',
      component: Center,
      alias: '/kerwin'//别的名字
    },

    {
      path: '/detail/:kerwinid', // 动态路由
      name: 'detail', //命令路由
      component: Detail
    },

    // {
    //   path: '/detail', // 
    //   name: 'detail', //命令路由
    //   component: Detail
    // },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }

    {
      path: '/',
      redirect: '/film'
    }
  ]
})

//每次跳转路由之前 -- 全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log(to);
//   if(to.path==="/center"){
//     console.log("检测有无token");
//     if(false){
//       next();
//     }else{
//       next("/login");
//     }
//   }else{
//     next();
//   }
  
// })


export default router //ES6 模块导出
