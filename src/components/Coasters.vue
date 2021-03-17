<template>
  <div class="container">
    <div
      v-for="(coaster, index) in Array(5)"
      :key="index"
      class="coaster"
    />
  </div>
</template>

<script>
export default {
  name: 'Coasters'
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
}
</style>