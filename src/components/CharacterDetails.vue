<template>
      <div>
 
    <img class="rounded-full float-right max-w-[25%]" :src="imgUrl"/>
    <h2 class="font-bold uppercase text-amber-600">{{ name }}</h2>
    <p><strong class="font-bold">{{ wizard ? gender=="female" ? "Witch" : "Wizard" : "No magic powers" }}</strong></p>
    <p><strong>Date of birth: </strong>{{ birth ? birth  : "unknown"}}</p>
        <p><strong>Species: </strong>{{ species }}</p>
   <p><strong>Gender: </strong>{{ gender }}</p> 
   <p><strong>House: </strong>{{ house }}</p> 
   <button>Read more</button>
  </div>
</template>

<script>

export default {
    name: 'CharacterDetails',
    props: {
    name: String,
    gender: String,
    house: String,
    wizard: Boolean,
    birth: String,
    species: String,
    imgUrl: String
  },
};
</script>