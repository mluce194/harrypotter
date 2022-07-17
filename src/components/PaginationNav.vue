<template>
<div>
    <a href="#" v-for="n in numOfPages" :key="n" @click="handlePage(n)"> - {{ n }} </a>
    </div>
</template>

<script>
export default {
    name: "PaginationNav",
    props: {
        numOfPages: Number
    },
    methods: {
        handlePage(num) {
            this.$emit("getPageNumber", num)
            console.log("mon numéro de lien est", num)

        }
    }


}
</script>