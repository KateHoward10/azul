<template>
  <div class="grid">
    <div
      v-for="(tile, index) in tiles"
      :key="index"
      :class="tile"
      class="tile"
    />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  setup() {
    const tiles = [
      'blue', 'yellow', 'red', 'black', 'white',
      'white', 'blue', 'yellow', 'red', 'black',
      'black', 'white', 'blue', 'yellow', 'red',
      'red', 'black', 'white', 'blue', 'yellow',
      'yellow', 'red', 'black', 'white', 'blue'
    ];

    return { tiles };
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(5, 64px);
  grid-template-rows: repeat(5, 64px);
  margin: 3px;
}
</style>
<style>
.tile {
  width: 56px;
  height: 56px;
  margin: 3px;
  border-radius: 3px;
  border: 1px solid #603c06;
}
.blue {
  background-color: deepskyblue;
}
.yellow {
  background-color: yellow;
}
.red {
  background-color: red;
}
.black {
  background-color: #222;
}
.white {
  background-color: #eee;
}
</style>