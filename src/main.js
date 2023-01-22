import { createApp } from 'vue'
import './assets/css/styles.css'
import App from './App.vue'
import Router from './router/routes'

createApp(App).use(Router).mount('#app')
