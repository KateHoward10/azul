<template>
  <router-link :to="`/game/${id}`">New game</router-link>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  name: 'Home',
  setup() {
    const id = uuid();
    return { id };
  }
}
</script>