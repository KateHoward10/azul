<template>
  <Queues /><Grid />
</template>

<script>
import io from "socket.io-client/dist/socket.io.js"
import Queues from "./components/Queues.vue"
import Grid from "./components/Grid.vue"

export default {
  name: 'App',
  setup() {
    let socket = io("http://localhost:3000");
  },
  components: { Queues, Grid }
}
</script>

<style>
body {
  background-color: #fadbac;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>