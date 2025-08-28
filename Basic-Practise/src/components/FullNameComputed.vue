<script lang="ts">
  export default {
    data() {
      return {
        first_name: 'John',
        last_name: 'Doe',
      }
    },computed:{
      fullName() {
        return 'Full Name: ' + this.first_name + ' ' + this.last_name;
      },
    }
  }
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <p>{{ fullName }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>