import { createRouter, createWebHistory } from 'vue-router'
import CharacterPage from '../views/CharacterPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/character',
        name: 'Character',
        component: CharacterPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router