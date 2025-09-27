import './assets/styles/css/libs.css'
import './assets/styles/sass/main.sass'
import '@/assets/styles/css/libs.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import App from '@/App.vue'
import pinia from '@/plugins/pinia'
import router from '@/plugins/router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
