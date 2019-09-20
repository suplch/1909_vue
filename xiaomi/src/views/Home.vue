<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
export default {
  name: 'home',
  components: {
    HomeHeader
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
</style>
