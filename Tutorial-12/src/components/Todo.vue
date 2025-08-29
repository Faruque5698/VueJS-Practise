<script>
import Header from './Header.vue'
import TaskModal from './TaskModal.vue'
import ShowTask from './ShowTask.vue'

export default {
  components:{
    Header,
    TaskModal,
    ShowTask
  },props:{
    todoList:Object
  },data(){
    return{
      tasks:this.todoList,
      title:"",
      description:"",

    }
  },methods: {
    addTask(task) {
      let taskList = {
        id: this.tasks.length + 1,
        title: task.title,
        description: task.description
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
   <Header/>
  <TaskModal @addTask="addTask"/>
    <div class="row">
      <ShowTask
          v-for="item in tasks"
          :key="item.id"
          :item="item"
          @removeTask="removeTask(item.id)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>