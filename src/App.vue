<template>
  <div class="bg-zinc-800">
    <router-link to="/character">Character Page</router-link>
    |
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
    name: "App",
}
</script>
