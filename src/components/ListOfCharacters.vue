<template>
  <div>
    <div v-for="character in getSlicedArray" :key="character.id">
      <CharacterCard
        :name="character.name"
        :house="character.house"
        :gender="character.gender"
      ></CharacterCard>
    </div>
        <PaginationNav v-if="getPagination" @getPageNumber="getCurrentPage"></PaginationNav>

  </div>
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
  data: function() {
    return {
        paginate: true,

    }
  },


  methods: {
      getCurrentPage: function(page) {
      console.log("la page sur laquelle je suis est",page)
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
    getPagination: function() {
        if(this.getFilteredCharacters.length <= 4) {
            return false
        }
        else {
            return true
        }
    },
    getSlicedArray: function() {
        if(this.getPagination) {
            return this.getFilteredCharacters.slice(4)
        }
        else {
            return this.getFilteredCharacters
        }
    },


  }

};
</script>
