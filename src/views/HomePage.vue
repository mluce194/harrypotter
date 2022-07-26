<template>
    <MainContainer></MainContainer>

    
</template>

<script>

import CharactersData from "/data/characters.json"
import MainContainer from "@/components/MainContainer.vue"

export default {
    name: "HomePage",
    components: {
        MainContainer
    },
    data: function() {
        return {
                  charactersInfos: CharactersData,

        }
    }

}
</script>