<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>

  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>
  <h3>{{a}}</h3>
  <button @click="btn">点击</button>


</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const a = ref(1);
    const btn = () => {
      a.value++;
    }

    return {
      btn,
      a
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
