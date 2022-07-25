<template>
  <div class="bg-zinc-800 h-[vh-100%]">
    <h1 class="text-4xl font-bold p-10 text-amber-600 text-center">Search a Harry Potter character</h1>

    <SearchForm
      @read-character-name="characterNameHandler"
      @read-character-house="characterHouseHandler"
      @read-character-gender="characterGenderHandler"
    ></SearchForm>

    <ListOfCharacters
      :charactersList="charactersInfos"
      :typedName="inputName"
      :pickedGender="inputGender"
      :pickedHouse="inputHouse"
    ></ListOfCharacters>
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ListOfCharacters from "./ListOfCharacters";
import CharactersData from "/data/characters.json"
export default {
  name: "MainContainer",
  components: {
    ListOfCharacters,
    SearchForm,
  },
  data: function () {
    return {
      charactersInfos: CharactersData,
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
