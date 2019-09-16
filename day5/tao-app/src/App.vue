<template>
  <div id="app">
    <TreeNode v-bind:node="root"></TreeNode>
    <MyDialog></MyDialog>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="欢迎 to Your Vue.js 应用程序"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyDialog from './components/MyDialog.vue';
import TreeNode from './components/TreeNode.vue';

export default {
  name: 'app',
  data() {
    return {
      root: {
        name: '中国',
        children: [
          {
            name: '广东',
            children: [
              {
                name: '深圳',
                children: [
                  {
                    name: '宝安区',
                    children: [
                      {
                        name: '西部硅谷'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '湖南',
            children: [
              {
                name: '长沙',
                children: [
                  {
                    name: '望城'
                  }, {
                    name: '长沙县'
                  }
                ]
              },
              {
                name: '邵阳'
              }
            ]
          }
        ]
      }
    }
  },
  components: {
    HelloWorld,
    MyDialog,
    TreeNode
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
