<template>
<div class="flex flex-wrap justify-center w-[80%] mx-auto">
    <a href="#" v-for="n in nbDePages" :key="n" @click="handlePage(n)" class="p-1 text-white hover:underline focus:underline" :class="activePage == n ? active : ''"> {{ n }} </a>
    </div>
</template>

<script>
export default {
    name: "PaginationNav",
    props: {
        nbDePages: Number,
        activePage: Number
    },
    data: function() {
        return {
            active: "text-amber-600 font-bold"
        }
    },
    methods: {
        handlePage(num) {
            this.$emit("getPageNumber", num)
      
        }
    }


}
</script>