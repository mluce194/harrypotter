import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'

import App from './App.vue'

import './index.css'
import CharactersData from "/data/characters.json"


const store = createStore({
    state: {
        data: CharactersData,
        character: '',
        gender: 'all',
        house: 'all'
    },
    mutations: {
        changeCharacter(state, input) {
            state.character = input
        },
        changeGender(state, input) {
            state.gender = input
        },
        changeHouse(state, input) {
            state.house = input
        }
    }


})



createApp(App).use(router).use(store).mount('#app')
