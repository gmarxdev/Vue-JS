<template>
  <div>
    <h1>{{ msg }}</h1>
    <Modal header="Sign Up for a Discount! HAHAHAHA"/>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      msg: "MODAL WILL POP UP HERE!"
    }
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
