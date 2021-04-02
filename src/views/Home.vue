<template>
  <form @submit.prevent="newGame">
    <label>Username <input required v-model="username" /></label>
    <button type="submit">Start new game</button>
  </form>
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
      players: []
    });
    const socket = inject('socket');

    function newGame() {
      const gameId = uuid();
      socket.emit("joinGame", state.username, gameId);
      router.push({ name: "Game", params: { id: gameId } });
    }

    socket.on("updatePlayers", newPlayers => {
      state.players = newPlayers;
    });

    return { ...toRefs(state), newGame };
  }
}
</script>