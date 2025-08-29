import { createApp } from 'vue'
import App from './app.vue'
import router from './route.js'

createApp(App)
    .use(router)
    .mount('#app')