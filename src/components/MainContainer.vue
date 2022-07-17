<template>
  <div>
    <h1>Search a Harry Potter character</h1>
    <SearchForm
      @read-character-name="characterNameHandler"
      @read-character-house="characterHouseHandler"
      @read-character-gender="characterGenderHandler"
    ></SearchForm>

    <ListOfCharacters
      :charactersList="characters"
      :typedName="inputName"
      :pickedGender="inputGender"
      :pickedHouse="inputHouse"
    ></ListOfCharacters>
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ListOfCharacters from "./ListOfCharacters";
export default {
  name: "MainContainer",
  components: {
    ListOfCharacters,
    SearchForm,
  },
  data: function () {
    return {
      characters: [
        { id: 1, name: "Harry Potter", house: "Gryffindor", gender: "male" },
        {
          id: 2,
          name: "Hermione Granger",
          house: "Gryffindor",
          gender: "female",
        },
        { id: 3, name: "Ron Weasley", house: "Gryffindor", gender: "male" },
        { id: 4, name: "Drago Malfoy", house: "Slytherin", gender: "male" },
        { id: 5, name: "Harry Potter 1", house: "Gryffindor", gender: "male" },
        {
          id: 6,
          name: "Hermione Granger 1",
          house: "Gryffindor",
          gender: "female",
        },
        { id: 7, name: "Ron Weasley 1", house: "Gryffindor", gender: "male" },
        { id: 8, name: "Drago Malfoy 1", house: "Slytherin", gender: "male" },
      ],
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
      console.log("le nom tapé pour mon personnage est", name);
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
