<script lang="ts">
export default {
  data() {
    return {
      inputText: '',

    }
  },methods:{

  }
}
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <input type="text" class="form-control mt-2 mb-2" v-model="inputText"> <br>
      <h3>{{ inputText }}</h3>
    </div>

  </div>
</template>

<style scoped>

</style>