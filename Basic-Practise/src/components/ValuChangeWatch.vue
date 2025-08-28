<script lang="ts">
  export default {
    data() {
      return {
        data: '',

      }
    },watch:{
      data(newValue, oldValue) {
        console.log("Old:", oldValue, "→ New:", newValue);
      }
    }
  }
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <input type="text" class="form-control mt-2 mb-2" v-model="data">
    </div>
  </div>
</template>

<style scoped>

</style>