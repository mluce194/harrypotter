<template>
  <div class="bg-zinc-800 min-h-screen">
    <router-view></router-view>

  </div>

</template>

<script>

export default {
  name: "App",
      mounted() {
        this.$store.dispatch("fetchAllData")
    }

}
</script>
