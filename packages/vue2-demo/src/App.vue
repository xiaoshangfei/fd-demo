<template>
  <div id="app" class="container px-4">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/global.css';

export default {
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
