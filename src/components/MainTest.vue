<template>
  <div>
    <h1>Search a Harry Potter character</h1>

   <ListOfCharacters :pickedGender="gender" :pickedHouse="house" :typedName="characterName"></ListOfCharacters>
  </div>
</template>

<script>

import ListOfCharacters from './ListOfCharacters'
export default {
    name: 'MainTest',
    components: {
    ListOfCharacters
    },
    data: function() {
      return {
        gender: "male",
        house: "slytherin",
        characterName: ""
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
