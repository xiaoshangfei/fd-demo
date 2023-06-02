<template>
  <div id="app" class="bg-green-100 h-screen w-screen">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/global.css';
import WeatherForecast from '@/api/Modules/WeatherForecast';

export default {
  provide: {
    WeatherForecast: WeatherForecast
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
