<template>
  <div>
    <button @click="test">test</button>
    <div class="kerwin" >
      <ul>
        <li v-bind:key="item.id" v-for="item of datalist">
          {{item.name}}, 价格 {{item.price}}, 图片: {{item.pic}}
        </li>
      </ul>
      <div v-show="loading" style="position: absolute; top: 0px; width: 100%; height: 50px">
        loading...
      </div>
      <div v-show="loadingMore" style="position: absolute; bottom: 0px; width: 100%; height: 50px; background: cornflowerblue">
        加载更多...
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
import BScroll from 'better-scroll';
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      pageNo: 1,
      loading: false,    // 控制 加载提示 div
      loadingMore: false,  // 控制 加载提示 div
      datalist: []
    }
  },
  methods: {
    loadProduct(callback) {
      axios.get(`/product/more?pageNo=${this.pageNo}&pageSize=3`).then((result) => {
        this.datalist = [...this.datalist, ...result.data];
        this.pageNo++;
        (typeof callback === 'function') && callback();
      }).catch((err) => {
        alert(err.message);
        (typeof callback === 'function') && callback();
      });
    },
    test() {
      this._scroll.next(1000);
    }
  },
  mounted() {

    this.loadProduct();

    const scroll = new BScroll('.kerwin', {
      snap: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      },
      scrollbar: {
        fade: true,
        interactive: false,
      },
      pullUpLoad: {
        threshold: 50
      }
    });

    this._scroll = scroll;

    scroll.on('pullingDown', () => {
      console.log('下拉刷新');
      scroll.finishPullDown();  // 结束下拉刷新
    });

    scroll.on('pullingUp', () => {
      console.log('正在加载...')
      this.loadingMore = true;

      this.loadProduct(() => {
        scroll.finishPullUp(); // 结束 上拉加载

        this.$nextTick(() => {
          this._scroll.next(1000);
        });
        this.loadingMore = false;
      });
    })
  },
  components: {}
}
</script>
<style scoped>
  ul {
    list-style: none;
  }
  ul li {
    height: 100px;
    margin: 10px;
    box-shadow: 2px 2px 2px red;
  }
  .kerwin{
    height: 300px;
    overflow:hidden;
    position: relative;
   }
</style>
