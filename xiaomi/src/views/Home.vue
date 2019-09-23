<template>
  <div class="home">
    <HomeHeader v-on:changeType="switchType($event)"></HomeHeader>
    <transition :name="movedir">
      <keep-alive>
        <component :is="comps[type.id]"></component>
      </keep-alive>
    </transition>

  </div>
</template>

<script>

import HomeHeader from '@/components/HomeHeader.vue';
import GoodsList from '@/components/GoodsList.vue';
import PhoneList from '@/components/PhoneList.vue';
import Smart from '@/components/Smart.vue';
import TV from '@/components/TV.vue';
import NoteBook from '@/components/NoteBook.vue';
import Electric from '@/components/Electric.vue';
import AboutLife from '@/components/AboutLife.vue';

export default {
  name: 'home',
  data() {
    return {
      movedir: 'move2left',
      type: {id: '111', name: '推荐', bgColor: 'red'},
      currentIndex: 0,
      comps: {
        '111': 'GoodsList',
        '222': 'PhoneList',
        '333': 'Smart',
        '444': 'TV',
        '555': 'NoteBook',
        '666': 'Electric',
        '777': 'AboutLife'
      }
    }
  },
  mounted() {
    this.$eventBus.$emit('showHideNav', true);
  },
  methods: {
    switchType(event) {

      if (this.type.id !== event.data.type.id) {
        this.type = event.data.type;
        if (this.currentIndex  < event.data.index) {
          this.movedir = 'move2left';
        } else {
          this.movedir = 'move2right';
        }
        this.currentIndex = event.data.index;
      }

    }
  },
  components: {
    HomeHeader,
    GoodsList,
    PhoneList,
    Smart,
    TV,
    NoteBook,
    Electric,
    AboutLife
  }
}
</script>
<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }

  header {
    position: fixed;
    top: 0px;
    height: 74px;
    width: 100%;
    background: grey;
  }

  .move2left-enter-active, .move2left-leave-active {
    position: absolute;
    width: 100%;
    transition: left .5s;
  }
  .move2left-enter {
    left: 7.5rem;
  }

  .move2left-enter-to {
    left: 0px;
  }

  .move2left-leave {
    left: 0px;
  }

  .move2left-leave-to {
    left: -7.5rem;
  }


  .move2right-enter-active, .move2right-leave-active {
    position: absolute;
    width: 100%;
    transition: left .5s;
  }
  .move2right-enter {
    left: -7.5rem;
  }

  .move2right-enter-to {
    left: 0px;
  }

  .move2right-leave {
    left: 0px;
  }

  .move2right-leave-to {
    left: 7.5rem;
  }

</style>
