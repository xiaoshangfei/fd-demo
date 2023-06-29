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
<!-- eslint-disable no-unused-vars -->
<script>
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, retry, throwError } from 'rxjs';
export default {
  inject: ['API'],
  data() {
    return {
      weatherList: []
    };
  },
  mounted() {
    // this.get();
    this.get2();
  },
  methods: {
    async get() {
      this.weatherList = await this.API.WeatherForecast.get();
    },
    async get2() {
      fromFetch('http://150.158.75.148/api/WeatherForecast/1')
        .pipe(
          switchMap((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return of(response).pipe(
                switchMap((err) => {
                  new Error(response.status);
                  console.log('retry');
                }),
                retry(2)
              );
            }
          }),
          catchError((err) => {
            return of({ error: true, message: `Error ${err.message}` });
          })
        )
        .subscribe((result) => (this.weatherList = result));
    }
  }
};
</script>
<style></style>
