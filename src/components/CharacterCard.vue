<template>
  <div>
    <h2>{{ name }}</h2>
    <strong>Gender:</strong> {{ gender }}<br />
    <strong>House:</strong> {{ house }}<br />
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    name: String,
    gender: String,
    house: String,
  },
};
</script>

<style></style>
