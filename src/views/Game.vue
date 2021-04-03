<template>
  <p>Players: {{ players.join(", ") }}</p>
  <button @click="start">Start</button>
  <Coasters :coasters="coasters" />
  <div class="board">
    <Queues /><Grid />
  </div>
</template>

<script>
import { computed, inject } from "vue"
import { useStore } from "vuex"
import Coasters from "../components/Coasters.vue"
import Queues from "../components/Queues.vue"
import Grid from "../components/Grid.vue"

export default {
  name: "Game",
  setup() {
    const store = useStore();
    const players = computed(() => store.state.players);
    const tiles = computed(() => store.state.tiles);
    const coasters = computed(() => store.state.coasters);
    const socket = inject("socket");

    function start() {
      const colours = [...Array(20).fill("blue"), ...Array(20).fill("yellow"), ...Array(20).fill("red"), ...Array(20).fill("black"), ...Array(20).fill("white")];
      const shuffled = colours.sort(() => Math.random() - 0.5);
      store.commit("setTiles", shuffled);
      store.commit("setCoasters", [shuffled.slice(0, 4), shuffled.slice(4, 8), shuffled.slice(8, 12), shuffled.slice(12, 16), shuffled.slice(16, 20)]);
      socket.emit("newGame", coasters.value);
    }

    socket.on("updatePlayers", newPlayers => {
      store.commit("setPlayers", newPlayers);
    });

    socket.on("gameStarted", data => {
      store.commit("setCoasters", data);
    })

    return { players, tiles, coasters, start }
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