<template>
  <div>
    <h1>Hi I am Gielo Mar Bandoy</h1>
    <hr>
    <h5>An aspiring Software Engineer</h5>

    <button @click="addCounter(counter++)">
      {{ counter }}
    </button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
