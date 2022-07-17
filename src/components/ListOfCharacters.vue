<template>
  <div>
    <div v-for="character in getFilteredCharacters" :key="character.id">
      <CharacterCard
        :name="character.name"
        :house="character.house"
        :gender="character.gender"
      ></CharacterCard>
    </div>
        <PaginationNav v-if="getFilteredCharacters.length > 4"></PaginationNav>

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


  methods: {},
  computed: {
    getFilteredCharacters: function () {
      return this.charactersList.filter(
        character =>
          character.name.toLowerCase().startsWith(this.typedName) &&
          (character.gender == this.pickedGender || this.pickedGender == "all") &&
          (character.house == this.pickedHouse || this.pickedHouse == "all")
      );
    }
  }

};
</script>
