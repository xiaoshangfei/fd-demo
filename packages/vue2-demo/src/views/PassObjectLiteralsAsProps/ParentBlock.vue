<template>
  <div class="flex flex-col justify-start items-center w-full py-6 px-32">
    <input type="text" v-model="msg" class="h-16 w-full rounded-md my-6" />
    <div class="flex justify-between items-center my-6 w-full">
      <label for="">字面量传递</label>
      <child-block :obj="{ a: 1 }"></child-block>
    </div>
    <div class="flex justify-between items-center my-6 w-full">
      <label for="">非字面量传递</label>
      <child-block :obj="obj"></child-block>
    </div>
  </div>
</template>
<script>
import ChildBlock from './ChildBlock.vue';
export default {
  components: {
    ChildBlock
  },
  data() {
    return {
      msg: '',
      obj: { a: 1 }
    };
  }
};
</script>
<style></style>
