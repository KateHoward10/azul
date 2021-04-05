<template>
  <p>
    <span v-for="(player, index) in players" :key="index" class="name" :class="{ 'text-bold': players[game.turn] === player }">
      {{ player }}
    </span>
  </p>
  <button v-if="players[0] === username" @click="start">Start</button>
  <Coasters :coasters="game.coasters" :myTurn="players[game.turn] === username" :selectTiles="selectTiles" />
  <div class="board">
    <Queues /><Grid />
  </div>
</template>

<script>
import { computed, ref, inject } from "vue"
import { useStore } from "vuex"
import Coasters from "../components/Coasters.vue"
import Queues from "../components/Queues.vue"
import Grid from "../components/Grid.vue"

export default {
  name: "Game",
  setup() {
    const store = useStore();
    const username = computed(() => store.state.username);
    const players = computed(() => store.state.players);
    const game = computed(() => store.state.game);
    const selectedTiles = ref([]);
    const socket = inject("socket");

    function start() {
      const colours = [...Array(20).fill("blue"), ...Array(20).fill("yellow"), ...Array(20).fill("red"), ...Array(20).fill("black"), ...Array(20).fill("white")];
      const shuffled = colours.sort(() => Math.random() - 0.5);
      const data = {
        tiles: shuffled,
        coasters: [shuffled.slice(0, 4), shuffled.slice(4, 8), shuffled.slice(8, 12), shuffled.slice(12, 16), shuffled.slice(16, 20)],
        turn: Math.random() * players.length | 0
      };
      store.commit("setGame", data);
      socket.emit("updateGame", data);
    }

    function selectTiles(index, tileIndex) {
      const coaster = game.value.coasters[index];
      const toSelect = coaster.filter(tile => tile === coaster[tileIndex]);
      const number = toSelect.length;
      if (confirm(`Are you sure you‘d like to select ${number} ${toSelect[0]} tile${number > 1 ? "s" : ""} and discard the rest?`)) {
        selectedTiles.value = toSelect;
        const coasters = game.value.coasters.map((c, i) => i === index ? [] : c);
        const data = { ...game.value, coasters };
        store.commit("setGame", data);
        socket.emit("updateGame", data);
      };
    }

    socket.on("updatePlayers", newPlayers => {
      store.commit("setPlayers", newPlayers);
    });

    socket.on("gameUpdated", data => {
      store.commit("setGame", data);
    });

    return { username, players, game, start, selectTiles }
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
.name {
  margin: 0 5px;
}
.text-bold {
  font-weight: bold;
}
</style>