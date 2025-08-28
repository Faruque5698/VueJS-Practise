<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    }
  },methods: {
    addTask() {
      this.$emit('addTask', {
        title: this.title,
        description: this.description
      });
      this.title = "";
      this.description = "";
    }
  }
}
</script>

<template>
  <div class="modal fade" id="addTodoModal" tabindex="-1" aria-labelledby="addTodoLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4 shadow">
        <div class="modal-header">
          <h5 class="modal-title" id="addTodoLabel">Add New Todo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row m-2">
            <input type="text" class="form-control" v-model="title" placeholder="Enter your task title">
          </div>
          <div class="row m-2">
            <textarea class="form-control" v-model="description" placeholder="Enter your task..." cols="6" rows="6"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="addTask">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>