<template>
    <div>
        <router-link to="/" class="text-white text-lg p-5 mb-20 inline-block mx-auto bg-amber-600 hover:underline focus:underline">
            Back to list</router-link>

                <CharacterDetails></CharacterDetails>
    </div>
</template>

<script>
import CharacterDetails from '../components/CharacterDetails.vue'

export default {
    name: 'CharacterPage',
    components: {
        CharacterDetails
    }
}
</script>