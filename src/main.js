import { createApp } from "vue";
import { createStore } from "vuex";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";

import "./index.css";

const store = createStore({
  state: {
    dataFromApi: [],
    pageNumber: 1,
    character: "",
    gender: "all",
    house: "all",
  },
  mutations: {
    changeCharacter(state, input) {
      state.character = input;
    },
    changeGender(state, input) {
      state.gender = input;
    },
    changeHouse(state, input) {
      state.house = input;
    },
    setData(state, data) {
      state.dataFromApi = data;
    },
    setPageNumber(state, number) {
      state.pageNumber = number;
    },
  },
  actions: {
    async fetchAllData({ commit }) {
      try {
        const data = await axios.get('https://hp-api.herokuapp.com/api/characters')
          commit('setData', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
  },
  getters: {
    charactersData(state) {
      return state.dataFromApi;
    },
  },
});

createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .mount("#app");
