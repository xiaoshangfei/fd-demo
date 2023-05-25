#### 问题发生

> 1. 父组件通过props传递数据给子组件
> 2. 当props数据为Ojbect类型
> 3. 子组件watch这个props，并做了一些数据操作
> 4. **这个props通过字面量形式传递**
> 5. 父组件随便修改一个响应式数据（与props无关的数据）
> 6. 子组件触发watch
> 7. 子组件触发updated

> 父 ParentBlock.vue
>
> ```html
> <div>
>   <input type="text" v-model="msg" />
> 	<child-block :obj="{ a: 1 }"></child-block>
> 	<child-block :obj="obj"></child-block>
> </div>
> ```
>
> ```js
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
> ```
>
> 子 ChildBlock.vue
>
> ```html
> <div>子组件渲染次数：{{ updateCount }}</div>
> ```
>
> ```js
> export default {
>   props: {
>     obj: {
>       type: Object,
>       default: () => null
>     }
>   },
>   updated() {
>     console.log(`更新了${this.updateCount}次`);
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
> ```

> 父组件中input用来修改msg值，第一个子组件用字面量，第二个子组件用事先定义的对象。
>
> 此时修改msg值，msg与子组件无关，理应不会触发子组件的更新，**但通过字面量传递的子组件每次都发生了更新**

> 模版编译后要对比哪些地方做了修改，只会patch修改的部分，表面上只修改了msg，但编译过程中，由于是字面量对象，每次编译时的引用都不同，每次都是全新的对象，所以：
>
> * 第一个子组件每次都会触发watch
>
> * 第二个子组件因为是相同的引用，不会进watch

> **应尽量避免直接使用字面量传递，或者watch中只监测对象属性，而不是整个对象**
>
> ```js
> watch: {
>     'obj.a': {
>       handler() {
>         this.updateCount++;
>       }
>     }
>   }
> ```

#### 参考

[javascript - Vue.js child component with object literals as props unexpectedly updates when its parent renders - Stack Overflow](https://stackoverflow.com/questions/56380383/vue-js-child-component-with-object-literals-as-props-unexpectedly-updates-when-i)

