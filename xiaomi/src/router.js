import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/Category.vue')
    },{
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },{
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/detail/:pid',
      name: 'detail',
      component: () => import('./views/detail.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/Checkout.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/AddressList.vue')
    },
    {
      path: '/editaddress',
      name: 'editaddress',
      component: () => import('./views/EditAddress.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
const navShow = ['home', 'category', 'user'];
router.beforeEach( (to, from, next) => {
  console.log('tooooo', to)
  const $eventBus = Vue.prototype.$eventBus;
  if (navShow.indexOf(to.name) !== -1) {
    $eventBus.$emit('showHideNav', true);
  } else {
    $eventBus.$emit('showHideNav', false);
  }

  next();
});


export default router
