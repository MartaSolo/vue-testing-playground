<template>
  <NavBar />
  <WelcomeMessage msg="Vue testing tutorial"/>
  <ToDoApp />
  <TheParent />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import WelcomeMessage from '@/components/WelcomeMessage.vue';
import ToDoApp from '@/components/ToDoApp.vue';
import TheParent from '@/components/TheParent.vue';

export default {
  name: 'App',
  components: {
    NavBar, WelcomeMessage, ToDoApp, TheParent
  }
}
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
