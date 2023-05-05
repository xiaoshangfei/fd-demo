<template>
  <div>
    <router-link to="router.path" v-for="router in routers" :key="router.name">{{ router.name }}</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routers: this.$router.getRoutes()
    };
  }
};
</script>
<style></style>
