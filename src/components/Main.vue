<template>
  <div>
    <h1>Search a Harry Potter character</h1>
    <SearchForm
      @read-character-name="characterHandler"
      @read-character-gender="genderHandler"
      @read-character-house="houseHandler"
    ></SearchForm>
   <ListOfCharacters :pickedGender="gender" :pickedHouse="house" typedName="characterName"></ListOfCharacters>
    <PaginationNav @get-page-number="goToPage"/>
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import PaginationNav from "./PaginationNav";
import ListOfCharacters from "./ListOfCharacters";

export default {
  name: "ListOfCharacters",
  data: function () {
    return {

       
      characterName: "",
      gender: "both",
      house: "all",

    };
  },

  components: {
    SearchForm,
    PaginationNav,
    ListOfCharacters
  },

  methods: {
    characterHandler(name) {
      this.characterName = name.toLowerCase();
    },
    genderHandler(gender) {
      this.gender = gender;
    },
    houseHandler(house) {
      this.house = house;
    },
    goToPage(n) {
      console.log("numéro de page récupéré par le parent", n);
    },
  },

  computed: {
   /* numOfPages() {
      return this.characters.length/4
    },*/


  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
