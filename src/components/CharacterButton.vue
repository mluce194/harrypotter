<template>
    <router-link :to="'/character/' + getRouteName"
        class="block text-center font-bold p-2 m-5 border bg-amber-600 hover:text-amber-600 hover:bg-white focus:text-amber-600 focus:bg-white">
        Read more
    </router-link>

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