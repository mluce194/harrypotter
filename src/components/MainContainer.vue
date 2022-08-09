<template>
  <div>
    <h1 class="text-4xl font-bold p-10 text-amber-600 text-center">Search a Harry Potter character</h1>
    <SearchForm></SearchForm>

      <ListOfCharacters :charactersList="getCharactersData" :typedName="getInputName" :pickedGender="getInputGender"
        :pickedHouse="getInputHouse"></ListOfCharacters>





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
      return this.$store.getters.charactersData
    },
    getInputName() {
      return this.$store.state.character
    },
    getInputGender() {
      return this.$store.state.gender
    },
    getInputHouse() {
      return this.$store.state.house
    }

  },





};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
