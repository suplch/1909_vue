<template>
  <div>
    Hello <button @click="gotoAbout"> 关于 </button>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <hr/>
    <router-link to="/products">产品列表</router-link>
    <br/>
    <!-- 路由跳转连接 -->
    <router-link to="/about">关于</router-link>

    <!-- 路由组件站位符 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    gotoAbout() {
      // 路由跳转
      this.$router.push({path: '/about'});
    },
    back() {
      // 返回, 相当于 点击 浏览器的后退 按钮
      this.$router.back();
    },
    forward() {
      // 相当于 点击浏览器 的前进 按钮
      this.$router.forward();
    }
  },
  components: {

  }
}
</script>

<style>

</style>
