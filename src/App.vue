<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>

  <HelloWorld msg="测试1"/>
  <HelloWorld msg="测试1"/>
  <Test></Test>

  <button @click="btn">+1</button>




</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld';
import Test from './components/test.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Test
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
