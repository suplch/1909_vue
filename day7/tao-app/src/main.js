import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router';

import App from './App.vue'
import Products from './components/Products.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Copyright from './components/Copyright.vue';
import Map from './components/Map';

import ProductDetail from './components/ProductDetail';

// 告诉 vue 使用 VueRouter 模块
Vue.use(VueRouter);

Vue.config.productionTip = false;

// 初始化 VueRouter
const router = new VueRouter({
  routes: [ // 配置路由规则
    {
      name: 'products',
      path: '/products', //当路由path是/products时访问 Products 组件
      component: Products
    },{
      name: 'detail',
      path: '/productdetail/:pid/:type',
      component: ProductDetail
    },{
      name: 'about',
      path: '/about',
      component: About,
      children: [
        {
          name: 'contact',
          path: 'contact',
          meta: { other: '你好 哈哈 😃'},
          component: Contact,
          children: [
            {
              name: 'map',
              path: 'map',
              component: Map
            }
          ]
        }, {
          name: 'copyright',
          path: 'copyright',
          component: Copyright
        }
      ]
    }
  ]
});


new Vue({
  router, // 将路由参数 传递给Vue实例
  render: h => h(App),
}).$mount('#app');
