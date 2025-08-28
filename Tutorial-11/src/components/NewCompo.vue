<script lang="ts">

export default {
  // props: ['title'], //without data type
  props: {
    title: String, //with data type
    id: Number,
    isValid: Boolean,
    author: Object,
  },
  computed: {
    transFormed() {
      return this.title.toUpperCase()
    }
  }
}
</script>

<template>
  <h1>{{ id }}. {{ title }} And {{ isValid }}</h1>
  <h1>{{ transFormed }}</h1>
  <h3>{{ author.name }}</h3>
</template>

<style scoped>

</style>