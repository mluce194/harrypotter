<template>
    <router-link :to="'/character/'+getRouteName" class="block text-center font-bold p-2 m-5 border bg-amber-600">Read more</router-link>

</template>

<script>
export default {
    name: 'CharacterButton',
    props: {
        nameOfCharacter: String,
    },
    computed: {
        getRouteName() {
            return this.nameOfCharacter.split(" ").join("-")
        }
    },
}

</script>