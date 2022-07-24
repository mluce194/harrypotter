<template>
<div>
    <a href="#" v-for="n in nbDePages" :key="n" @click="handlePage(n)"> - {{ n }} </a>
    </div>
</template>

<script>
export default {
    name: "PaginationNav",
    props: {
        nbDePages: Number
    },
    methods: {
        handlePage(num) {
            this.$emit("getPageNumber", num)

        }
    }


}
</script>