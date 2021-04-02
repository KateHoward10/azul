import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from "socket.io-client"

const socket = io("http://localhost:3001")

createApp(App).use(router).use(store).provide('socket', socket).mount('#app')
