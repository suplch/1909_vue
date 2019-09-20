<template>
  <div>

      <tabbar v-show="$store.state.isTabbarShow"></tabbar>
      <section>
        <router-view></router-view> 
      </section>
      <!-- 路由容器 -->
  </div>
</template>

<script>
// 用import导入 , export default  导出
// module.exports=test;   require("")
import Vue from 'vue'
import tabbar from './components/tabbar'

export default {
  data () {
    return {
      title: '111111',
      isShow: false
    }
  },

  methods: {
   
  },

  components: {
    tabbar // 注册局部组件
  }
}
</script>

<style>

   *{
    margin: 0;
    padding: 0;
   }

   html,body{
    height: 100%;
    touch-action: none;
   }

   ul,li{
    list-style: none;
   }

   section{
    margin-bottom: 50px;
   }
</style>
