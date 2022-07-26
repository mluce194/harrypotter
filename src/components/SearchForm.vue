<template>
  <form class="p-5 md:w-[40rem] mx-auto">
    <div class="m-2 sm:flex">
      <label for="character" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Search by character name</label>
      <input type="text" id="character" placeholder="Type character name" @input="handleCharacterChange" class="w-[100%] sm:w-[50%]"/>
    </div>
    <div class="m-2 sm:flex">
      <label for="gender" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Sort by gender</label>
      <select id="gender" @change="handleGenderChange" class="w-[100%] sm:w-[50%]">
        <option value="all">All genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="m-2 sm:flex">
      <label for="house" class="text-white w-[100%] sm:w-[50%] text-xl my-2 block">Sort by house</label>
      <select id="house" @change="handleHouseChange" class="w-[100%] sm:w-[50%]">
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
      this.$emit("readCharacterName", event.target.value);
    },
    handleGenderChange(event) {
      this.$emit("readCharacterGender", event.target.value);
    },
    handleHouseChange(event) {
      this.$emit("readCharacterHouse", event.target.value);
    },
  },
};
</script>
