<template>
    <div class="flex flex-wrap justify-center w-[80%] mx-auto">
        <a v-if="activePage > 1" href="#" @click="handlePage(1)" class="p-1 text-white hover:text-amber-600 hover:underline focus:text-amber-600">&lt;</a>
        <a v-if="activePage > 1" href="#" @click="handlePage(activePage - 1)" class="p-1 text-white hover:text-amber-600 hover:underline focus:text-amber-600">&lt;&lt;
           </a>
        <a href="#" v-for="n in nbDePages" :key="n" @click="handlePage(n)"
            class="p-1 text-white hover:text-amber-600 hover:underline focus:text-amber-600" :class="activePage == n ? active : ''"> {{ n }} </a>
        <a v-if="activePage != nbDePages" href="#" @click="handlePage(activePage + 1)" class="p-1 text-white hover:text-amber-600 hover:underline focus:text-amber-600">
           &gt;&gt;</a>
            <a v-if="activePage != nbDePages" href="#" @click="handlePage(nbDePages)" class="p-1 text-white hover:text-amber-600 hover:underline focus:text-amber-600">&gt;</a>

    </div>
</template>

<script>
export default {
    name: "PaginationNav",
    props: {
        nbDePages: Number,
    },
    data: function () {
        return {
            active: "text-amber-600 font-bold",
            activePage: 1
        }
    },
    methods: {
        handlePage(num) {
            this.$emit("getPageNumber", num)
            this.activePage=num
        }
    },




}
</script>