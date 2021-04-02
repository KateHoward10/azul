import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import io from "socket.io-client"

const socket = io("http://localhost:3001")

createApp(App).provide('socket', socket).use(router).mount('#app')
