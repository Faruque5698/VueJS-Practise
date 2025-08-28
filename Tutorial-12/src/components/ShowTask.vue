<script>
export default {
  props: {
    item: Object,
  }
}
</script>

<template>

  <div class="mt-4 col-md-4">
    <div class="card text-white" style="width: 18rem; background: darkcyan;">
      <div class="card-body">
        <h5 class="card-title text-black"><b>{{ item.title }}</b></h5>
        <p class="card-text">{{ item.description }}</p>
        <button type="button" @click="$emit('removeTask')" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>