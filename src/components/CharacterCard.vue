<template>
  <div class="border rounded p-5 text-white">

    <img class="rounded-full float-right max-w-[25%]" :src="imgUrl" />
    <h2 class="font-bold uppercase text-amber-600">{{ name }}</h2>
    <p class="uppercase">{{ wizard ? gender == "female" ? "Witch" : "Wizard" : species }}</p>
    <p><strong>Date of birth: </strong>{{ birth ? birth : "unknown" }}</p>
    <p><strong>Species: </strong>{{ species ? species : "unknown" }}</p>
    <p><strong>Gender: </strong>{{ gender }}</p>
    <p><strong>House: </strong>{{ house ? house : "no recognized house" }}</p>
    <CharacterButton :nameOfCharacter="name"></CharacterButton>
  </div>
</template>

<script>
import CharacterButton from './CharacterButton';

export default {
  name: "CharacterCard",
  props: {
    name: String,
    gender: String,
    house: String,
    wizard: Boolean,
    birth: String,
    species: String,
    imgUrl: String
  },
  components: {
    CharacterButton
  },



};
</script>

<style>
</style>
