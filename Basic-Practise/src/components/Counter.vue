<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      isOn: true,

    }
  }, methods: {
    increment() {
      this.count++
    }, decrement() {
      this.count--
    },
  },
}
</script>

<template>
  <div class="container">
    <div class=" py-5 d-flex justify-content-center">
      <div class="d-flex align-items-center gap-3">
        <!-- Minus Button -->
        <button @click="decrement" class="btn btn-danger">-</button>

        <!-- Counter Value -->
        <h2 id="value" class="mb-0">{{ count }}</h2>

        <!-- Plus Button -->
        <button @click="increment" class="btn btn-success">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>