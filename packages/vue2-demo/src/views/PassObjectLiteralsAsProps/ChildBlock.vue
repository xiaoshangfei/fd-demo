<template>
  <div class="flex h-16 w-4/5 bg-orange-300 rounded-md shadow-sm items-center justify-center text-lg">子组件更新次数：{{ updateCount }}</div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      updateCount: 0
    };
  },
  watch: {
    obj: {
      handler() {
        this.updateCount++;
      }
    }
  }
};
</script>
<style></style>
