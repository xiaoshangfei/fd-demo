<template>
  <div class="flex flex-col justify-start items-center w-full">
    <div
      v-for="weather in weatherList"
      :key="weather.Date"
      class="flex flex-col h-24 w-8/12 shadow-sm rounded-sm bg-slate-200 text-cyan-500 my-2 px-2"
    >
      <div class="flex flex-col">
        <div>TemperatureC:{{ weather.TemperatureC }}</div>
        <div>TemperatureF:{{ weather.TemperatureF }}</div>
        <div>{{ weather.Summary }}</div>
      </div>
      <div class="flex flex-col items-end">
        <div>{{ weather.Date | FormatTime('YYYY-MM-DD') }}</div>
      </div>
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
