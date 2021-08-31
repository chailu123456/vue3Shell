<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>
  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>
<<<<<<< HEAD
  <h3>{{a}}</h3>
  <button @click="btn">+1</button>
=======
  <HelloWorld msg="使用shell命令进行操作git,远程推送代码"/>
>>>>>>> 0f9b5642a03625a9060858830b968ce41c1b0db2



</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
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
