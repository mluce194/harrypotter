<template>
  <div class="sm:flex">
    <div v-for="character in getSlicedArray" :key="character.id" class="border p-5 w-[100%] sm:w-[25%]">
      <CharacterCard :name="character.name" :house="character.house" :gender="character.gender"></CharacterCard>
    </div>

  </div>
      <PaginationNav v-if="getPagination" @get-page-number="getCurrentPage" :nbDePages="getNumOfPages"></PaginationNav>

</template>

<script>
import CharacterCard from "./CharacterCard";
import PaginationNav from "./PaginationNav"


export default {
  name: "ListOfCharacters",
  props: {
    charactersList: Object,
    typedName: String,
    pickedGender: String,
    pickedHouse: String,
  },
  components: {
    CharacterCard,
    PaginationNav
  },
  data: function () {
    return {
      /*Nombre de personnages par page */
      numOfItems: 4,
      /*Numéro de page par défaut*/
      pageNumber: 1,
      /* Index du début de la division slice */
      sliceFirstIndex: 0,
      /* Index de la fin de la division slice - doit être similaire au nombre de personnages par page */
      sliceLastIndex: 4
    }
  },


  methods: {

    getCurrentPage: function (page) {
      this.sliceLastIndex = this.numOfItems*page
      this.sliceFirstIndex = this.sliceLastIndex - this.numOfItems

    }
  },
  computed: {
    getFilteredCharacters: function () {
      return this.charactersList.filter(
        character =>
          character.name.toLowerCase().startsWith(this.typedName) &&
          (character.gender == this.pickedGender || this.pickedGender == "all") &&
          (character.house == this.pickedHouse || this.pickedHouse == "all")
      );
    },

    getNumOfPages: function() {
      return Math.round(this.getFilteredCharacters.length/this.numOfItems)

    },


    getPagination: function () {
      if (this.getFilteredCharacters.length <= this.numOfItems) {
        return false
      }
      else {

        return true
      }
    },

    getSlicedArray: function () {
      if (this.getPagination) {
        console.log(`La pagination est active et le premier index est ${this.sliceFirstIndex}, le dernier index est ${this.sliceLastIndex}`)
        return this.getFilteredCharacters.slice(this.sliceFirstIndex,this.sliceLastIndex)
      }
      else {
        return this.getFilteredCharacters
      }
    },


 


  }

};
</script>
