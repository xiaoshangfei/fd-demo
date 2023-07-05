<template>
  <div class="flex flex-col justify-start items-center w-full">
    <div class="flex flex-row justify-around w-8/12">
      <input class="h-16 w-4/5 rounded-md my-6" type="text" v-model="tempData" />
      <button class="rounded-md bg-cyan-200 h-16 w-1/5 p-2 mx-2 my-6 text-2xl" @click="pushData">Add</button>
      <button class="rounded-md bg-cyan-200 h-16 w-1/5 p-2 mx-2 my-6 text-2xl" @click="change1">Change1</button>
      <button class="rounded-md bg-cyan-200 h-16 w-1/5 p-2 mx-2 my-6 text-2xl" @click="change2">Change2</button>
    </div>
    <div class="flex flex-row justify-around w-8/12">
      <div class="flex flex-col justify-start items-center w-1/3">
        <span class="rounded-md bg-white flex justify-center items-center text-lg w-full h-12 my-2">Array1</span>
        <span class="rounded-md bg-white flex justify-center items-center text-lg w-full h-12 my-2" v-for="(item, index) in arr1" :key="index">{{
          item
        }}</span>
      </div>
      <div class="flex flex-col justify-start items-center w-1/3">
        <span class="rounded-md bg-white flex justify-center items-center text-lg w-full h-12 my-2">Array2</span>
        <span class="rounded-md bg-white flex justify-center items-center text-lg w-full h-12 my-2" v-for="(item, index) in arr2" :key="index">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
export default {
  data() {
    return {
      arr1: [],
      arr2: [],
      tempData: ''
    };
  },
  mounted() {},
  methods: {
    pushData() {
      this.arr1.push(this.tempData);
      this.arr2.push(this.tempData);
    },
    change1() {
      const temp = new Date().toLocaleTimeString();
      for (let index = 0; index < this.arr1.length; index++) {
        this.arr1[index] = temp;
      }
    },
    change2() {
      const temp = new Date().toLocaleTimeString();
      for (let index = 0; index < this.arr2.length; index++) {
        this.$set(this.arr2, index, temp);
      }
    }
  }
};
</script>
<style></style>
