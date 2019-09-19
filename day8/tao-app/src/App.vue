<template>
  <div id="app" style="border: solid 5px orange">
    hello

    {{ count }}, {{ countA }}, {{ countB }}, {{ countAdd }}

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
import {INCREMENT, DECREMENT} from './constant'
import { mapState, mapGetters, mapMutations } from 'vuex';
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
    ...mapState([
      'count'
    ]),
    ...mapGetters([
        'countA',

    ]),
    ...mapGetters({
      countB: 'countB'
    }),
    countAdd() {
      return this.$store.getters.countAdd(500);
    }
  },
  methods: {
    inc() {
      // 提交一个 名字叫 decrement 的 mutation 突变
      // this.$store.commit(INCREMENT, 1)
      // 分发一个 action 动作
      this.$store.dispatch(INCREMENT, 1)

    },
    dec() {
      // 提交一个 名字叫 decrement 的 mutation 突变
      // this.$store.commit(DECREMENT, 1)
      this.$store.dispatch(DECREMENT, 1)
    },
    inc10() {
      // 提交一个 名字叫 increment 的 mutation 突变
      // this.$store.commit(INCREMENT, 10)
      this.$store.dispatch(INCREMENT, 10)
    },
    dec10() {
      // 提交一个 名字叫 decrement 的 mutation 突变
      // this.$store.commit(DECREMENT, 10)
      this.$store.dispatch(DECREMENT, 10)
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
