<script lang="ts">
export default {
  data() {
    return {
      isOk: true
    }
  }, methods: {
    changeClass() {
      if (this.isOk) {
        this.isOk = false;
      } else {
        this.isOk = true;
      }
    },
  }
}
</script>

<template>
  <div class="py-5 d-flex justify-content-center">
    <div class="row">
      <div class="py-5 d-flex justify-content-center">
        <div class="row">
          <button class="btn btn-info" @click="changeClass" :class="isOk ? 'btn-primary' : 'btn-danger'">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>