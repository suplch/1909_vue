<template>
  <div id="app" style="font-size: 0.24rem">
    <router-view/>
    <footer>
      <div @click="gotoPage(page)" :key="page.name" :class="{current: page === currentPage}" v-for="page of pages">{{page.text}}</div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        currentPage: undefined,
        pages: [
          {name: 'home', text: '首页', path: '/'},
          {name: 'category', text: '分类', path: '/category'},
          {name: 'cart', text: '购物车', path: '/cart'},
          {name: 'user', text: '我的', path: '/user'},
        ]
      }
    },
    mounted() {
      console.log(this.$route)
      for (let page of this.pages) {
        if (page.path === location.pathname) {
          this.currentPage = page;
          break;
        }
      }
    },
    methods: {
      gotoPage(page) {
        this.currentPage = page;
        this.$router.push({name: page.name});
      }
    }
  }
</script>
<style scoped>
  #app {
    width: 100%;
    height: 100%;
  }

  .current {
    color: orange;
  }

  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    box-shadow: -1px -1px 5px lightgray;
  }

  footer > div {
    display: inline-block;
    text-align: center;
    line-height: 50px;
    flex: 1;
  }
</style>
