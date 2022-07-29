<template>
  <div>
    <h1 class="text-4xl font-bold p-10 text-amber-600 text-center">Search a Harry Potter character</h1>
    <SearchForm @read-character-name="characterNameHandler" @read-character-house="characterHouseHandler"
      @read-character-gender="characterGenderHandler"></SearchForm>
    <ListOfCharacters :charactersList="getCharactersData" :typedName="inputName" :pickedGender="inputGender"
      :pickedHouse="inputHouse"></ListOfCharacters>




  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ListOfCharacters from "./ListOfCharacters.vue";

export default {
  name: "MainContainer",
  components: {
    SearchForm,
    ListOfCharacters
  },
  data: function () {
    return {
      gender: "male",
      house: "slytherin",
      inputName: "",
      inputHouse: "all",
      inputGender: "all",
    };
  },
  methods: {
    characterNameHandler(input) {
      this.inputName = input;
    },
    characterHouseHandler(input) {
      this.inputHouse = input;
    },
    characterGenderHandler(input) {
      this.inputGender = input;
    },
  },
  computed: {
    getCharactersData() {
      return this.$store.state.data
    },

  },



};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
