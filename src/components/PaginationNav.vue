<template>
<div>
    <a href="#" v-for="n in nbDePages" :key="n" @click="handlePage(n)" class="p-1" :class="activePage == n ? active : ''"> {{ n }} </a>
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
            active: "text-blue-500 font-bold"
        }
    },
    methods: {
        handlePage(num) {
            this.$emit("getPageNumber", num)
      
        }
    }


}
</script>