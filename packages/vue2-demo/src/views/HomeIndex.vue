<template>
  <div class="flex md:flex-row md:flex-wrap flex-col justify-start items-center py-4 px-4 text-slate-600">
    <router-link
      class="flex flex-col sm:flex-row md:flex-col justify-around sm:justify-between md:justify-around items-start sm:items-center md:items-start md:h-16 h-16 sm:h-10 w-4/5 md:w-64 hover:scale-110 hover: transition-all shadow-sm hover:shadow-md focus:shadow-md bg-green-50 hover:bg-orange-200 focus:bg-orange-200 rounded-md md:text-md my-1 mx-1 px-4"
      :to="router.path"
      v-for="router in routers"
      :key="router.name"
    >
      <div>{{ router.meta.title }}</div>
      <div class="text-xs text-slate-400">{{ router.meta.description }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routers: this.$router.getRoutes().filter((item) => !item.meta.hidden)
    };
  },
  methods: {}
};
</script>
<style scoped></style>
