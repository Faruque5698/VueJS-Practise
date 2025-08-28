<script>


export default {
  props:{
    todoList:Object
  },data(){
    return{
      tasks:this.todoList,
      title:"",
      description:"",

    }
  },methods: {
    addTask() {
      let taskList = {
        id: this.tasks.length + 1,
        title: this.title,
        description: this.description
      };
      this.tasks.push(taskList);

    },removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

  }

}
</script>

<template>
  <div class="container">
    <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <i class="bi bi-check2-square text-primary me-1"></i> Todo App
        </a>

        <button class="btn btn-primary rounded-circle ms-auto" data-bs-toggle="modal"
                data-bs-target="#addTodoModal">
          +
        </button>
      </div>
    </header>

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

   <div class="row">
     <div class="mt-4 col-md-4" v-for="item in tasks">
       <div class="card text-white" style="width: 18rem; background: darkcyan;">
         <div class="card-body">
           <h5 class="card-title text-black"><b>{{ item.title }}</b></h5>
           <p class="card-text">{{ item.description }}</p>
           <button type="button" @click="removeTask(item.id)" class="btn btn-danger">Remove</button>
         </div>
       </div>
     </div>
   </div>

  </div>
</template>

<style scoped>

</style>