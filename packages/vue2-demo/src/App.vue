<template>
  <div id="app" class="bg-green-100 h-screen w-screen">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/global.css';
import API from '@/api/Modules';

export default {
  provide: {
    API: API
  },
  name: 'App',
  components: {},
  data() {
    return {
      menuList: []
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
