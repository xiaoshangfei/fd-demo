> 问题发生条件
>
> 1. 父组件通过props传递数据给子组件
> 2. 当props数据为Ojbect类型
> 3. 子组件watch这个props
> 4. **这个props通过字面量形式传递**

> 父 ParentBlock.vue
>
> ```vue
> <template>
> 	<div>
>   	<input type="text" v-model="msg" />
> 		<child-block :obj="{ a: 1 }"></child-block>
> 		<child-block :obj="obj"></child-block>
>   </div>
> </template>
> <script>
> import ChildBlock from './ChildBlock.vue';
> export default {
>   components: {
>     ChildBlock
>   },
>   data() {
>     return {
>       msg: '',
>       obj: { a: 1 }
>     };
>   }
> };
> </script>
> ```
>
> 子 ChildBlock.vue
>
> ```vue
> <template>
>   <div>子组件渲染次数：{{ updateCount }}</div>
> </template>
> <script>
> export default {
>   props: {
>     obj: {
>       type: Object,
>       default: () => null
>     }
>   },
>   data() {
>     return {
>       updateCount: 0
>     };
>   },
>   watch: {
>     obj: {
>       handler() {
>         this.updateCount++;
>       }
>     }
>   }
> };
> </script>
> ```
>
> 