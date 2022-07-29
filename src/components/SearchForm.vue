<template>
  <form class="p-5 md:w-[40rem] mx-auto">
    <div class="m-2 sm:flex">
      <label for="character" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Search by character name</label>
      <input type="text" id="character" placeholder="Type character name" :value="getInputName" @input="handleCharacterChange" class="w-[100%] sm:w-[50%]"/>
    </div>
    <div class="m-2 sm:flex">
      <label for="gender" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Sort by gender</label>
      <select id="gender" @change="handleGenderChange" class="w-[100%] sm:w-[50%]" :value="getInputGender">
        <option value="all">All genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="m-2 sm:flex">
      <label for="house" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Sort by house</label>
      <select id="house" @change="handleHouseChange" class="w-[100%] sm:w-[50%]" :value="getInputHouse">
        <option value="all">All houses</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data: function () {
    return {
      characterName: "",
      gender: "",
    };
  },

  methods: {
    handleCharacterChange(event) {
      this.$store.commit('changeCharacter', event.target.value)
    },
    handleGenderChange(event) {
      this.$store.commit('changeGender', event.target.value)

    },
    handleHouseChange(event) {
      this.$store.commit('changeHouse', event.target.value)
    },
  },
  computed: {
    getInputName() {
      return this.$store.state.character
    },
    getInputGender() {
      return this.$store.state.gender
    },
    getInputHouse() {
      return this.$store.state.house
    }
  }
};
</script>
