import { createStore } from 'vuex'

export default createStore({
  state: {
    username: null,
    gameId: null,
    players: [],
    tiles: [],
    coasters: []
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
    setTiles(state, tiles) {
      state.tiles = tiles
    },
    setCoasters(state, coasters) {
      state.coasters = coasters
    }
  }
})