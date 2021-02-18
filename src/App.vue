<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import io from "socket.io-client/dist/socket.io.js"

let socket = io("http://localhost:3000");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>