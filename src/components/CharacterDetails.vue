<template>

  <div v-if="getSingleCharacterData" class="text-white px-5 pb-20 sm:max-w-[50rem] mx-auto text-xl">
    <h1 class="text-4xl font-bold px-5 pb-20 text-amber-600 text-center uppercase">{{ getSingleCharacterData.name }}
    </h1>
    <img v-if="getSingleCharacterData.image"
      class="block mx-auto max-w-[100%] sm:float-right sm:max-w-[40%] md:max-w-[50%] sm:ml-2 rounded-lg"
      :src="getSingleCharacterData.image" :alt="getSingleCharacterData.name" />
    <p class="py-2"><strong>{{ getSingleCharacterData.wizard ? getSingleCharacterData.gender == "female" ? "Witch" :
        "Wizard" : getSingleCharacterData.species
    }}</strong></p>
    <p class="py-2"><strong>{{ getSingleCharacterData.hogwartsStudent ? "Hogwarts student" :
        getSingleCharacterData.hogwartsStaff ?
          "Hogwarts staff" : ""
    }}</strong></p>
    <p class="py-2"><strong class="text-amber-600">Date of birth: </strong>{{ getSingleCharacterData.dateOfBirth ?
        getSingleCharacterData.dateOfBirth :
        "unknown"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Species: </strong>{{ getSingleCharacterData.species ?
        getSingleCharacterData.species : "unknown"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Gender: </strong>{{ getSingleCharacterData.gender }}</p>
    <p class="py-2"><strong class="text-amber-600">House: </strong>{{ getSingleCharacterData.house ?
        getSingleCharacterData.house : "no recognized house"
    }}
    </p>
    <p class="py-2"><strong class="text-amber-600">Eye color: </strong>{{ getSingleCharacterData.eyeColour ?
        getSingleCharacterData.eyeColour : "unknown"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Hair color: </strong>{{ getSingleCharacterData.hairColour ?
        getSingleCharacterData.hairColour : "unknown"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Ancestry: </strong>{{ getSingleCharacterData.ancestry ?
        getSingleCharacterData.ancestry : "unknown"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Wand: </strong>{{ getSingleCharacterData.wand.wood != "" ?
        getCharacterWandInfo : "unknown or non-applicable"
    }}</p>
    <p class="py-2"><strong class="text-amber-600">Patronus: </strong>{{ getSingleCharacterData.patronus ?
        getSingleCharacterData.patronus : "unknown"
    }}</p>

  </div>
  <div v-else class="text-white px-5 pb-20 sm:max-w-[50rem] mx-auto text-xl">We are sorry: a database error occured. You
    can go back to the <router-link to="/" class="underline">homepage</router-link>.
  </div>

</template>

<script>



export default {
  name: 'CharacterDetails',


  computed: {
    getCharactersData() {
      return this.$store.getters.charactersData
    },
    getCharacterName() {
      return this.$route.params.character.split("-").join(" ")
    },
    getCharacterData() {
      return this.getCharactersData.filter(character => character.name == this.getCharacterName)
    },
    getSingleCharacterData() {
      return this.getCharacterData[0]
    },
    getCharacterWandInfo() {
      return this.getSingleCharacterData.wand.wood + " " + this.getSingleCharacterData.wand.core + " " + this.getSingleCharacterData.wand.length
    }
  },

};
</script>