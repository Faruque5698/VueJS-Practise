<script lang="ts">
  export default {
    data() {
      return {

      }
    },methods:{
      showAlert() {
        alert('This is a warning of click alert');
      },
    }
  }
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <button class="btn btn-info" @click="showAlert">Click for alert</button>
    </div>

  </div>
</template>

<style scoped>

</style>