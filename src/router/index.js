import { createRouter, createWebHistory } from 'vue-router'
import CharacterPage from '../views/CharacterPage.vue'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: "Home - Awesome Harry Potter character search"
        }
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
        meta: {
            title: "Home - Awesome Harry Potter character search"
        }
    },
    { path: '/:catchAll(.*)', redirect: '/404',
meta: {
    title: "404 page"
}},
    {
        path: '/character/:character',
        name: 'Character',
        component: CharacterPage,
        meta: {
            title: "Character page - Awesome Harry Potter character search",
            metaTags: [
                {
                    name: 'description',
                    content: 'You can search a Harry Potter character'
                }
            ]
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router