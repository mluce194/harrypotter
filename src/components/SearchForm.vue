<template>
  <form>
    <div>
      <label for="character">Search by character name</label>
      <input
        type="text"
        id="character"
        placeholder="Type character name"
        @input="handleCharacterChange"
      />
    </div>
    <div>
      <label for="gender">Sort by gender</label>
      <select id="gender" @change="handleGenderChange">
        <option value="all">All genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div>
      <label for="house">Sort by house</label>
      <select id="house" @change="handleHouseChange">
        <option value="all">All houses</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
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
