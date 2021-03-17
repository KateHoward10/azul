<template>
  <div class="grid">
    <div
      v-for="(queue, index) in queues"
      :key="index"
      class="row"
    >
      <div v-for="index in Array(queue).keys()" :key="index" class="tile" />
      <div class="arrow">➔</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Queues',
  setup() {
    const queues = [1, 2, 3, 4, 5];

    return { queues };
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  width: 350px;
  grid-template-rows: repeat(5, 64px);
  margin: 3px;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.arrow {
  background-color: blue;
  width: 24px;
  height: 48px;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  margin: auto 0;
}
</style>