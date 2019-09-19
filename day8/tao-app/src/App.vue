<template>
  <div id="app" style="border: solid 5px orange">
    hello

    {{ count }}

    <button @click="inc">+</button>
    <button @click="dec">-</button>

    <button @click="inc10">+10</button>
    <button @click="dec10">-10</button>
    <hr/>

    <ProductList></ProductList>
    <hr/>
    <button @click="showAddProduct = !showAddProduct">显示/隐藏</button>
    <AddProduct v-if="showAddProduct"></AddProduct>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
export default {
  name: 'app',
  data() {
    return {
      showAddProduct: true
    }
  },
  computed: {
    // 计算属性 返回 全局 store.state.count
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    inc() {
      // 提交一个 名字叫 increment 的 mutation 突变
      this.$store.commit('increment', 1)
    },
    dec() {
      // 提交一个 名字叫 decrement 的 mutation 突变
      this.$store.commit('decrement', 1)
    },
    inc10() {
      // 提交一个 名字叫 increment 的 mutation 突变
      this.$store.commit('increment', 10)
    },
    dec10() {
      // 提交一个 名字叫 decrement 的 mutation 突变
      this.$store.commit('decrement', 10)
    }
  },
  components: {
    ProductList,
    AddProduct
  }
}
</script>

<style>

</style>
