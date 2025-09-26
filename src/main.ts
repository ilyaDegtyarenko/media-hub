import './assets/styles/css/libs.css'
import './assets/styles/sass/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
