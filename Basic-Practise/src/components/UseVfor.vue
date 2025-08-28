<script lang="ts">
export default {
  data() {
    return {
      names: ['Ashad', "Mim", 'Rifat', 'Sifat'],

    }
  },
}
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <ul>
        <li v-for="name in names">{{ name }}</li>
      </ul>

    </div>
  </div>
</template>

<style scoped>

</style>