<template>
  <div>
    <label>Username <input :value="username" @change="setUsername" /></label>
  </div>
  <div>
    <label>Game ID <input :value="gameId" @change="setGameId" /></label>
  </div>
  <button @click="startGame">Start new game</button>
  <p>OR</p>
  <button @click="joinGame">Join game</button>
</template>

<script>
import { computed, inject } from "vue"
import { useStore } from "vuex"
import { v4 as uuid } from "uuid"
import router from "../router"

export default {
  name: "Home",
  setup() {
    const store = useStore();
    const username = computed(() => store.state.username);
    const setUsername = (e) => store.commit("setUsername", e.target.value);
    const gameId = computed(() => store.state.gameId);
    const setGameId = (e) => store.commit("setGameId", e.target.value);
    const socket = inject("socket");

    function startGame() {
      store.commit("setGameId", uuid());
      joinGame();
    }

    function joinGame() {
      socket.emit("joinGame", username.value, gameId.value);
      router.push({ name: "Game", params: { id: gameId.value } });
    }

    return { username, setUsername, gameId, setGameId, startGame, joinGame };
  }
}
</script>
