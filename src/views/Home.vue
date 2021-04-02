<template>
  <div>
    <label>Username <input required v-model="username" /></label>
  </div>
  <div>
    <label>Game ID <input required v-model="gameId" /></label>
  </div>
  <button @click="startGame">Start new game</button>
  <p>OR</p>
  <button @click="joinGame">Join game</button>
</template>

<script>
import { inject, reactive, toRefs } from "vue"
import { v4 as uuid } from "uuid"
import router from '../router'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      username: null,
      gameId: null,
      players: []
    });
    const socket = inject('socket');

    function startGame() {
      state.gameId = uuid();
      joinGame();
    }

    function joinGame() {
      socket.emit("joinGame", state.username, state.gameId);
      router.push({ name: "Game", params: { id: state.gameId } });
    }

    socket.on("updatePlayers", newPlayers => {
      state.players = newPlayers;
    });

    return { ...toRefs(state), startGame, joinGame };
  }
}
</script>
