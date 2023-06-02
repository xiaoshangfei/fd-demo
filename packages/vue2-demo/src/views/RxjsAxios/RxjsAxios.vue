<template>
  <div class="flex flex-col justify-start items-center w-full">
    <div v-for="weather in weatherList" :key="weather.Date" class="h-16 w-8/12 shadow-sm rounded-sm bg-slate-200 text-cyan-400 my-2 py-2 px-2">
      {{ weather.Summary }}
    </div>
  </div>
</template>
<script>
export default {
  inject: ['WeatherForecast'],
  data() {
    return {
      weatherList: []
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      this.weatherList = await this.WeatherForecast.get();
    }
  }
};
</script>
<style></style>
