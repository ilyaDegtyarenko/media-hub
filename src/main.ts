import '@/assets/styles/css/libs.css'
import '@/assets/styles/sass/main.sass'

import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/plugins/pinia'
import router from '@/plugins/router'
import fetchAppData from '@/plugins/fetchAppData.ts'

const app = createApp(App)

app.use(pinia)
app.use(router)

fetchAppData()
  .then(() => {
    app.mount('#app')
  })
  .catch((error) => {
    console.error('Failed to initialize app:', error)

    document.body.innerHTML = '<div>Error loading application</div>'
  })
