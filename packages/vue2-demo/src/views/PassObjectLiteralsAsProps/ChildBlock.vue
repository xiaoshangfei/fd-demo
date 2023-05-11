<template>
  <div class="flex h-16 w-4/5 bg-orange-300 rounded-md shadow-sm items-center justify-center text-lg">子组件渲染次数：{{ renderCount }}</div>
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
      renderCount: 1
    };
  },
  watch: {
    obj: {
      handler() {
        this.renderCount++;
      }
    }
  }
};
</script>
<style></style>
