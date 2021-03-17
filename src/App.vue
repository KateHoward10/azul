<template>
  <button @click="start">Start</button>
  <Coasters :coasters="coasters" />
  <div class="board">
    <Queues /><Grid />
  </div>
</template>

<script>
import { ref } from "vue"
import io from "socket.io-client/dist/socket.io.js"
import Coasters from "./components/Coasters.vue"
import Queues from "./components/Queues.vue"
import Grid from "./components/Grid.vue"

export default {
  name: 'App',
  setup() {
    let socket = io("http://localhost:3000");
    const tiles = ref([]);
    const coasters = ref([]);

    function start() {
      const colours = [...Array(20).fill('blue'), ...Array(20).fill('yellow'), ...Array(20).fill('red'), ...Array(20).fill('black'), ...Array(20).fill('white')]
      const shuffled = colours.sort(() => Math.random() - 0.5);
      tiles.value = shuffled;
      coasters.value = [shuffled.slice(0, 4), shuffled.slice(4, 8), shuffled.slice(8, 12), shuffled.slice(12, 16), shuffled.slice(16, 20)];
    }

    return { start, coasters }
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