<template>
  <div v-for="character in characters" :key="character.id">
    <CharacterCard
      v-if="
        character.name.toLowerCase().startsWith(typedName) &&
        (pickedGender == character.gender || pickedGender == 'both') &&
        (pickedHouse == character.house || pickedHouse == 'all')
      "
      :name="character.name"
      :house="character.house"
      :gender="character.gender"
      :pickedGender="{ pickedGender }"
      :pickedHouse="{ pickedHouse }"
      :typedName="{ typedName }"
    ></CharacterCard>
  </div>
</template>

<script>
import CharacterCard from "./CharacterCard";

export default {
  name: "ListOfCharacters",
  components: {
    CharacterCard,
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
    }
  },
};
</script>
