<template>
  <Coasters />
  <div class="board">
    <Queues /><Grid />
  </div>
</template>

<script>
import io from "socket.io-client/dist/socket.io.js"
import Coasters from "./components/Coasters.vue"
import Queues from "./components/Queues.vue"
import Grid from "./components/Grid.vue"

export default {
  name: 'App',
  setup() {
    let socket = io("http://localhost:3000");
    const tiles = [...Array(20).fill('blue'), ...Array(20).fill('yellow'), ...Array(20).fill('red'), ...Array(20).fill('black'), ...Array(20).fill('white')];
  },
  components: { Coasters, Queues, Grid }
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
}
.board {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>