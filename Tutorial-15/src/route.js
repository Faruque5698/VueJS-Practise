import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;