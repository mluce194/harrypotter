<template>
  <div class="sm:flex flex-wrap">
    <div v-for="character in getSlicedArray" :key="character.id" class="p-5 w-[100%] sm:w-[25%]">
      <CharacterCard :name="character.name" :house="character.house" :gender="character.gender"
        :wizard="character.wizard" :birth="character.dateOfBirth" :species="character.species" :imgUrl="character.image"></CharacterCard>
    </div>

  </div>
  <PaginationNav v-if="getPagination" @get-page-number="getCurrentPage" :nbDePages="getNumOfPages"
    :activePage="pageNumber"></PaginationNav>

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
      numOfItems: 8,
      /*Numéro de page par défaut*/
      pageNumber: 1,
      /* Index du début de la division slice */
      sliceFirstIndex: 0,
      /* Index de la fin de la division slice - doit être similaire au nombre de personnages par page */
      sliceLastIndex: 8
    }
  },


  methods: {

    getCurrentPage: function (page) {
      this.pageNumber = page
      this.sliceLastIndex = this.numOfItems * this.pageNumber
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
        return this.getFilteredCharacters.slice(this.sliceFirstIndex, this.sliceLastIndex)
      }
      else {
        return this.getFilteredCharacters
      }
    },

  },

  watch: {
    'typedName'() {
      this.getCurrentPage(1)

    },
    'pickedGender'() {
      this.getCurrentPage(1)
    },
    'pickedHouse'() {
      this.getCurrentPage(1)
    }
  }

};
</script>
