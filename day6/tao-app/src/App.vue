<template>
  <div id="app">
    <TreeTable></TreeTable>
  </div>
</template>

<script>
import TreeTable from './components/TreeTable.vue';
export default {
  name: 'app',
  components: {
    TreeTable
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
