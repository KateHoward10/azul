<template>
  <div class="container">
    <div
      v-for="(coaster, index) in coasters"
      :key="index"
      class="coaster"
    >
      <div v-for="(tile, index) in coaster" :key="index" class="tile small" :class="tile" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coasters',
  props: {
    coasters: Array
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.coaster {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #603c06;
  margin: 10px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.small {
  width: 40px;
  height: 40px;
}
</style>