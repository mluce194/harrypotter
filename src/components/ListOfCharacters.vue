<template>
  <div class="sm:flex flex-wrap">
    <div v-if="getSlicedArray.length == 0" class="mx-auto"><span class="text-white text-xl m-10 block">No character
        found</span></div>
    <div v-for="character in getSlicedArray" :key="character.id" class="p-5 w-[100%] sm:w-[25%]">

      <CharacterCard :name="character.name" :house="character.house" :gender="character.gender"
        :wizard="character.wizard" :birth="character.dateOfBirth" :species="character.species"
        :imgUrl="character.image"></CharacterCard>
    </div>

  </div>
  <PaginationNav v-if="getPagination" :nbDePages="getNumOfPages"></PaginationNav>


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
    PaginationNav,
  },
  data: function () {
    return {

      /*Nombre de personnages par page */
      numOfItems: 8,
      /* Index du début de la division slice par défaut */
      sliceFirstIndex: 0,
      /* Index de la fin de la division slice par défaut - doit être similaire au nombre de personnages par page */
      sliceLastIndex: 8
    }
  },


  computed: {

    getFilteredCharacters: function () {
      return this.charactersList.filter(
        character =>
          character.name.toLowerCase().includes(this.typedName.toLowerCase()) &&
          (character.gender == this.pickedGender || this.pickedGender == "all") &&
          (character.house == this.pickedHouse || this.pickedHouse == "all")
      );
    },

    getNumOfPages: function () {
      return Math.round(this.getFilteredCharacters.length / this.numOfItems)
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
        return this.getFilteredCharacters.slice(this.numOfItems * this.$store.state.pageNumber - this.numOfItems, this.numOfItems * this.$store.state.pageNumber)
      }
      else {
        return this.getFilteredCharacters
      }
    },

  },



};
</script>
