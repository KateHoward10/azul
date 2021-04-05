import { createStore } from 'vuex'

export default createStore({
  state: {
    username: null,
    gameId: null,
    players: [],
    game: {
      tiles: [],
      coasters: [],
      discarded: [],
      turn: null
    }
  },
  mutations: {
    setUsername(state, name) {
      state.username = name
    },
    setGameId(state, id) {
      state.gameId = id
    },
    setPlayers(state, newPlayers) {
      state.players = newPlayers
    },
    setGame(state, data) {
      state.game = { ...state.game, ...data }
    }
  }
})